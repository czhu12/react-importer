import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'
import Header from './components/Header'
import FileUploader from './components/FileUploader'
import HeaderMapper from './components/HeaderMapper'
import DataEditor from './components/DataEditor'
import {
  fieldIsRequired,
  fillInRequiredRows,
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

const Importer = ({ theme, onComplete, fields }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [parsed, setParsed] = useState(null)
  const [formattedData, setFormattedData] = useState([])
  const [statistics, setStatistics] = useState({
    statisticsByFieldKey: {},
    total: null
  })
  const [headerMappings, setHeaderMappings] = useState({})
  const [validationResult, setValidationResult] = useState(
    new ValidationResult()
  )

  const restart = () => {
    setCurrentStep(0)
    setParsed(null)
    setFormattedData([])
    setStatistics({ statisticsByFieldKey: {}, total: null })
    setHeaderMappings({})
    setValidationResult(new ValidationResult())
  }

  const setFile = (file) => {
    Papa.parse(file, {
      complete: (newParsed) => {
        setParsed(newParsed)
        setHeaderMappings(
          buildSuggestedHeaderMappings(fields, newParsed.data[0])
        )
        setCurrentStep(1)
      }
    })
  }

  useEffect(() => {
    if (parsed && parsed.data) {
      const newFormattedData = formatData(headerMappings, parsed.data)
      setFormattedData(newFormattedData)
    }
  }, [headerMappings])

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

  const rowData = []
  for (let i = 0; i < 100; i++) {
    rowData.push({ rowIndex: i })
  }

  const usedFilters = Object.keys(headerMappings)
    .map((h) => headerMappings[h])
    .filter((h) => !h.ignored && h.selectedField)
    .map((h) => h.selectedField.value)

  const unselectedFields = fields.filter((filter) => {
    return usedFilters.indexOf(filter.key) < 0
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
                  const newRowData = [...rowData]
                  newRowData[index] = row
                  setFormattedData(newRowData)
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
              setHeaderMappings={setHeaderMappings}
              restart={restart}
              onComplete={() => {
                setCurrentStep(2)
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
                setCurrentStep(1)
              }}
              onSubmit={() => {
                onComplete(buildFinalData(formattedData, validationResult))
              }}
              setRowData={(row, index) => {
                const newFormattedData = [...formattedData]
                newFormattedData[index] = row
                setFormattedData(newFormattedData)
              }}
            />
          )}
        </Container>
      </Root>
    </ThemeContext.Provider>
  )
}

export default Importer
