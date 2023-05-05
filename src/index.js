import React, { useReducer } from 'react'
import Papa from 'papaparse'
import Header from './components/Header'
import FileUploader from './components/FileUploader'
import HeaderMapper from './components/HeaderMapper'
import DataEditor from './components/DataEditor'
import Completed from './components/Completed'
import {
  fieldIsRequired,
  formatData,
  buildSuggestedHeaderMappings,
  buildFinalData,
  mergeDeep
} from './utils'
import { ThemeProvider } from 'styled-components'
import { Root, Margin, Container } from './components/common'
import {
  applyValidation,
  computeStatistics,
  ValidationResult
} from './validators'
import { applyTransformations } from './transformers'
import { delay } from './utils/timing'
import { THEME_DEFAULT } from './themes'
export * from './themes'

function buildInitialState(inject) {
  return {
    ...inject,
    currentStep: 0,
    parsed: null,
    pending: true,
    progress: 0,
    failed: false,
    formattedData: [],
    statistics: {
      statisticsByFieldKey: {},
      total: null
    },
    headerMappings: {},
    validationResult: new ValidationResult()
  }
}

const computeMetadata = (formattedData, fields, headerMappings) => {
  const newValidationResult = applyValidation(formattedData, fields)
  const newStatistics = computeStatistics(
    formattedData,
    headerMappings,
    newValidationResult
  )
  return {
    validationResult: newValidationResult,
    statistics: newStatistics
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'RESTART':
      return buildInitialState({ fields: state.fields })
    case 'DECREMENT_STEP':
      return { ...state, currentStep: state.currentStep - 1 }
    case 'COMPLETED_MAPPINGS': {
      const transformedFormattedData = applyTransformations(
        state.formattedData,
        state.fields
      )
      return {
        ...state,
        formattedData: transformedFormattedData,
        currentStep: state.currentStep + 1
      }
    }
    case 'SET_CURRENT_STEP': {
      const currentStep = action.payload.currentStep
      return {
        ...state,
        currentStep
      }
    }
    case 'FILE_PARSED': {
      const automaticHeaderMappings = buildSuggestedHeaderMappings(
        state.fields,
        action.payload.parsed.data[0]
      )
      const formattedData = formatData(
        automaticHeaderMappings,
        action.payload.parsed.data
      )
      return {
        ...state,
        ...computeMetadata(
          formattedData,
          state.fields,
          automaticHeaderMappings
        ),
        parsed: action.payload.parsed,
        headerMappings: automaticHeaderMappings,
        formattedData,
        currentStep: 1
      }
    }
    case 'HEADER_MAPPINGS_CHANGED': {
      const newFormattedData = formatData(
        action.payload.headerMappings,
        state.parsed.data
      )
      return {
        ...state,
        ...computeMetadata(
          newFormattedData,
          state.fields,
          action.payload.headerMappings
        ),
        headerMappings: action.payload.headerMappings,
        formattedData: newFormattedData
      }
    }
    case 'CELL_CHANGED': {
      const copy = [...state.formattedData]
      copy[action.payload.index] = action.payload.row
      return {
        ...state,
        ...computeMetadata(copy, state.fields, state.headerMappings),
        formattedData: copy
      }
    }
    case 'PROGRESS':
      return { ...state, progress: action.payload.progress }
    case 'PENDING':
      return { ...state, currentStep: 3, pending: true, progress: 0 }
    case 'COMPLETE':
      return { ...state, currentStep: 3, pending: false, progress: 100 }
    case 'FAILED':
      return { ...state, currentStep: 3, failed: true }
    default:
      return state
  }
}

const Importer = ({ theme, onComplete, fields }) => {
  const [
    {
      currentStep,
      parsed,
      formattedData,
      statistics,
      headerMappings,
      validationResult,
      pending,
      progress,
      failed
    },
    dispatch
  ] = useReducer(reducer, buildInitialState({ fields }))

  const restart = () => {
    dispatch({ type: 'RESTART' })
  }

  const setFile = (file) => {
    Papa.parse(file, {
      skipEmptyLines: true,
      complete: (newParsed) => {
        dispatch({ type: 'FILE_PARSED', payload: { parsed: newParsed } })
      }
    })
  }

  const rowData = []
  for (let i = 0; i < 100; i++) {
    rowData.push({ rowIndex: i })
  }

  const usedFilters = Object.keys(headerMappings)
    .map((h) => headerMappings[h])
    .filter((h) => !h.ignored && h.selectedField)
    .map((h) => h.selectedField.value)

  const unselectedFields = fields.filter((filter) => {
    return usedFilters.indexOf(filter.key) === -1
  })

  const headers = Object.keys(headerMappings)
    .map((h) => headerMappings[h])
    .filter((h) => h.confirmed)
    .map((h) => h.selectedField.value)

  const selectedFields = fields.filter((f) => {
    return headers.indexOf(f.key) >= 0
  })

  const missingRequiredFields = fields
    .filter((f) => fieldIsRequired(f))
    .filter((f) => {
      return selectedFields.map((f) => f.key).indexOf(f.key) === -1
    })

  const finalSelectedFields = fields.filter((f) => {
    return headers.indexOf(f.key) >= 0 || fieldIsRequired(f)
  })

  const submitWrapper = async () => {
    dispatch({ type: 'PENDING' })
    try {
      await onComplete(
        buildFinalData(formattedData, validationResult),
        (progress) => {
          dispatch({ type: 'PROGRESS', payload: { progress: progress } })
        }
      )
    } catch (e) {
      dispatch({ type: 'FAILED' })
      return
    }
    await delay(400)
    dispatch({ type: 'PROGRESS', payload: { progress: 100 } })
    await delay(200)
    dispatch({ type: 'COMPLETE' })
  }

  const finalTheme = mergeDeep({}, THEME_DEFAULT, theme)
  console.log(theme?.colors?.primary, finalTheme.colors.primary)
  return (
    <ThemeProvider theme={finalTheme}>
      <Root>
        <Container>
          <Header
            steps={['Upload', 'Match', 'Review', 'Complete']}
            currentStep={currentStep}
            onClick={(step) => {
              if (step === 'Upload') {
                restart()
              } else if (step === 'Match') {
                dispatch({ type: 'RESTART', payload: { currentStep: 1 } })
              } else if (step === 'Review') {
                dispatch({ type: 'RESTART', payload: { currentStep: 2 } })
              }
            }}
          />
          {currentStep === 0 && (
            <div>
              <FileUploader setFile={setFile} />
              <Margin margin='40px 0 10px 0'>
                <h6>Or just manually enter your data</h6>
              </Margin>
              <DataEditor
                statistics={statistics}
                formattedData={
                  formattedData.length > 0 ? formattedData : rowData
                }
                fields={fields}
                headerMappings={headerMappings}
                validationResult={validationResult}
                onSubmit={submitWrapper}
                setRowData={(row, index) => {
                  dispatch({
                    type: 'CELL_CHANGED',
                    payload: { index: index, row: row }
                  })
                }}
              />
            </div>
          )}
          {currentStep === 1 && (
            <HeaderMapper
              statistics={statistics}
              parsed={parsed}
              fields={unselectedFields}
              headerMappings={headerMappings}
              missingRequiredFields={missingRequiredFields}
              setHeaderMappings={(newHeaderMappings) => {
                dispatch({
                  type: 'HEADER_MAPPINGS_CHANGED',
                  payload: { headerMappings: newHeaderMappings }
                })
              }}
              restart={restart}
              onComplete={() => {
                dispatch({ type: 'COMPLETED_MAPPINGS' })
              }}
            />
          )}
          {currentStep === 2 && (
            <DataEditor
              statistics={statistics}
              formattedData={formattedData}
              fields={finalSelectedFields}
              headerMappings={headerMappings}
              validationResult={validationResult}
              onBack={() => {
                dispatch({ type: 'DECREMENT_STEP' })
              }}
              onSubmit={submitWrapper}
              setRowData={(row, index) => {
                dispatch({
                  type: 'CELL_CHANGED',
                  payload: { index: index, row: row }
                })
              }}
            />
          )}
          {currentStep === 3 && (
            <Completed
              formattedData={formattedData}
              pending={pending}
              progress={progress}
              failed={failed}
            />
          )}
        </Container>
      </Root>
    </ThemeProvider>
  )
}

export default Importer
