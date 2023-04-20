import React, { useEffect, useReducer, useState } from 'react'
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
  buildFinalData
} from './utils'
import { ThemeContext } from './contexts'
import { Root, Margin, Container } from './components/common'
import {
  applyValidation,
  computeStatistics,
  ValidationResult
} from './validators'

function buildInitialState(inject) {
  return {
    ...inject,
    currentStep: 0,
    parsed: null,
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
    case 'INCREMENT_STEP':
      return { ...state, currentStep: state.currentStep + 1 }
    case 'FILE_PARSED':
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
        formattedData: formattedData,
        currentStep: 1
      }
    case 'HEADER_MAPPINGS_CHANGED':
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
    case 'CELL_CHANGED':
      const copy = [...state.formattedData]
      copy[action.payload.index] = action.payload.row
      return {
        ...state,
        ...computeMetadata(copy, state.fields, state.headerMappings),
        formattedData: copy
      }
    case 'COMPLETE':
      return { ...state, currentStep: 3 }
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
      validationResult
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

  /*
  useEffect(() => {
    if (formattedData.length > 0) {
      const newValidationResult = applyValidation(formattedData, fields)
      setValidationResult(newValidationResult)
      const newStatistics = computeStatistics(
        formattedData,
        headerMappings,
        newValidationResult
      )
      setStatistics(newStatistics)
    }
  }, [formattedData])
  */

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

  return (
    <ThemeContext.Provider>
      <Root>
        <Container>
          <Header
            steps={['Upload', 'Match', 'Review', 'Complete']}
            currentStep={currentStep}
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
                onSubmit={() => {
                  onComplete(buildFinalData(formattedData, validationResult))
                }}
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
                dispatch({ type: 'INCREMENT_STEP' })
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
              onSubmit={() => {
                dispatch({ type: 'COMPLETE' })
                onComplete(buildFinalData(formattedData, validationResult))
              }}
              setRowData={(row, index) => {
                dispatch({
                  type: 'CELL_CHANGED',
                  payload: { index: index, row: row }
                })
              }}
            />
          )}
          {currentStep === 3 && <Completed formattedData={formattedData} />}
        </Container>
      </Root>
    </ThemeContext.Provider>
  )
}

export default Importer
