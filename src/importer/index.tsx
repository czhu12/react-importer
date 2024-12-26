import React, { useReducer } from 'react';
import Papa from 'papaparse';
import Header from '../components/Header';
import FileUploader from '../components/FileUploader';
import HeaderMapper from '../components/HeaderMapper';
import DataEditor from '../components/DataEditor';
import Completed from '../components/Completed';
import { fieldIsRequired, buildFinalData, mergeDeep } from '../utils';
import { ThemeProvider } from 'styled-components';
import { Root, Margin, Container } from '../components/common';
import { delay } from '../utils/timing';
import { THEME_DEFAULT } from '../themes';
import { buildInitialState, reducer } from './reducer';
import {
  ImporterField,
  ImporterFormattedData,
  ImporterOutputField,
  ImporterOutputFieldType,
  ImporterTheme,
} from '../types';

interface Props {
  fields: ImporterField[];
  theme: ImporterTheme;
  onComplete: (
    data: ImporterOutputField[],
    onProgress: (progress: number) => void
  ) => Promise<void>;
}

const HEADER_STEPS = ['Upload', 'Match', 'Review', 'Complete'] as const;

const Importer = ({ theme, onComplete, fields }: Props) => {
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
      failed,
    },
    dispatch,
  ] = useReducer(reducer, buildInitialState(fields));

  const restart = () => {
    dispatch({ type: 'RESTART' });
  };

  const setFile = (file: File) => {
    Papa.parse<ImporterOutputFieldType[]>(file, {
      skipEmptyLines: true,
      complete: (newParsed) => {
        dispatch({ type: 'FILE_PARSED', payload: { parsed: newParsed } });
      },
    });
  };

  const rowData = [];
  for (let i = 0; i < 100; i++) {
    rowData.push({ rowIndex: i });
  }

  const usedFilters = Object.keys(headerMappings)
    .map((h) => headerMappings[h])
    .filter((h) => !h.ignored && h.selectedField)
    .map((h) => h.selectedField!.value);

  const unselectedFields = fields.filter((filter) => {
    return usedFilters.indexOf(filter.key) === -1;
  });

  const headers = Object.keys(headerMappings)
    .map((h) => headerMappings[h])
    .filter((h) => h.confirmed && h.selectedField)
    .map((h) => h.selectedField!.value);

  const selectedFields = fields.filter((f) => {
    return headers.indexOf(f.key) >= 0;
  });

  const missingRequiredFields = fields
    .filter((f) => fieldIsRequired(f))
    .filter((f) => {
      return selectedFields.map((f) => f.key).indexOf(f.key) === -1;
    });

  const finalSelectedFields = fields.filter((f) => {
    return headers.indexOf(f.key) >= 0 || fieldIsRequired(f);
  });

  const submitWrapper = async () => {
    dispatch({ type: 'PENDING' });
    try {
      await onComplete(
        buildFinalData(formattedData, validationResult),
        (progress) => {
          dispatch({ type: 'PROGRESS', payload: { progress: progress } });
        }
      );
    } catch (e) {
      dispatch({ type: 'FAILED' });
      return;
    }
    await delay(400);
    dispatch({ type: 'PROGRESS', payload: { progress: 100 } });
    await delay(200);
    dispatch({ type: 'COMPLETE' });
  };

  const finalTheme = mergeDeep({}, THEME_DEFAULT, theme);

  return (
    <ThemeProvider theme={finalTheme}>
      <Root>
        <Container>
          <Header
            steps={HEADER_STEPS}
            currentStep={currentStep}
            onClick={(step) => {
              const stepIndex = HEADER_STEPS.indexOf(step);
              const currentStepValue = HEADER_STEPS[currentStep];

              if (step === 'Upload') {
                restart();
                return;
              }

              if (
                stepIndex < 0 ||
                stepIndex >= currentStep ||
                step === 'Complete' ||
                currentStepValue === 'Complete'
              ) {
                return;
              }

              if (step === 'Match') {
                // We can only go to Match from Review, so decrementing step should be enough
                dispatch({ type: 'DECREMENT_STEP' });
              }
            }}
          />
          {currentStep === 0 && (
            <div>
              <FileUploader setFile={setFile} />
              <Margin $margin="40px 0 10px 0">
                <h6>Or just manually enter your data</h6>
              </Margin>
              <DataEditor
                formattedData={
                  formattedData.length > 0
                    ? formattedData
                    : (rowData as ImporterFormattedData[])
                }
                fields={fields}
                validationResult={validationResult}
                onSubmit={submitWrapper}
                setRowData={(row, index) => {
                  dispatch({
                    type: 'CELL_CHANGED',
                    payload: { index: index, row: row },
                  });
                }}
              />
            </div>
          )}
          {currentStep === 1 && (
            <HeaderMapper
              statistics={statistics}
              parsed={parsed!}
              fields={unselectedFields}
              headerMappings={headerMappings}
              missingRequiredFields={missingRequiredFields}
              setHeaderMappings={(newHeaderMappings) => {
                dispatch({
                  type: 'HEADER_MAPPINGS_CHANGED',
                  payload: { headerMappings: newHeaderMappings },
                });
              }}
              restart={restart}
              onComplete={() => {
                dispatch({ type: 'COMPLETED_MAPPINGS' });
              }}
            />
          )}
          {currentStep === 2 && (
            <DataEditor
              formattedData={formattedData}
              fields={finalSelectedFields}
              validationResult={validationResult}
              onBack={() => {
                dispatch({ type: 'DECREMENT_STEP' });
              }}
              onSubmit={submitWrapper}
              setRowData={(row, index) => {
                dispatch({
                  type: 'CELL_CHANGED',
                  payload: { index: index, row: row },
                });
              }}
            />
          )}
          {currentStep === 3 && (
            <Completed pending={pending} progress={progress} failed={failed} />
          )}
        </Container>
      </Root>
    </ThemeProvider>
  );
};

export default Importer;
