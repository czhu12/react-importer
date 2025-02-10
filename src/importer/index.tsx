import { useReducer } from 'preact/compat';

import FileUploader from './components/FileUploader';
import HeaderMapper from '../mapper/components/HeaderMapper';
import SheetDataEditor from '../sheet/components/SheetDataEditor';
import Completed from './components/Completed';
import { Root, Margin, Container } from '../components';
import { delay } from '../utils/timing';
import { buildInitialState, reducer } from './reducer';
import {
  CellChangedPayload,
  ColumnMapping,
  FileWithPath,
  ImporterDefinition,
} from '../types';
import { ThemeProvider } from '../theme/ThemeProvider';
import { parseCsv } from '../parser';
import { getMappedData } from '../mapper';

export default function Importer({
  theme,
  onComplete,
  sheets,
  onDataColumnsMapped,
}: ImporterDefinition) {
  const [
    {
      mode,
      currentSheetId,
      sheetData,
      parsedFile,
      validationErrors,
      importProgress,
    },
    dispatch,
  ] = useReducer(reducer, buildInitialState(sheets));

  const currentSheetData = sheetData.find(
    (sheet) => sheet.sheetId === currentSheetId
  );

  const currentSheetDefinition = sheets.find(
    (sheet) => sheet.id === currentSheetId
  );

  function onFileUploaded(file: FileWithPath) {
    parseCsv({
      file,
      onCompleted: (newParsed) => {
        dispatch({ type: 'FILE_PARSED', payload: { parsed: newParsed } });
      },
    });
  }

  function onEnterDataManually() {
    dispatch({
      type: 'ENTER_DATA_MANUALLY',
      payload: { sheetDefinitions: sheets, amountOfEmptyRowsToAdd: 100 },
    });
  }

  function onMappingsSet(mappings: ColumnMapping[]) {
    const mappedData = getMappedData(sheets, mappings, parsedFile!);

    const newMappedData =
      onDataColumnsMapped != null
        ? onDataColumnsMapped(mappedData)
        : mappedData;

    dispatch({ type: 'DATA_MAPPED', payload: { mappedData: newMappedData } });

    // TODO THIS BRANCH: Run validations
  }

  function onCellChanged(payload: CellChangedPayload) {
    dispatch({ type: 'CELL_CHANGED', payload: payload });

    // TODO THIS BRANCH: Run validations
  }

  async function onSubmit() {
    dispatch({ type: 'SUBMIT' });
    try {
      // TODO THIS BRANCH: Should we filter empty / invalid data?
      await onComplete(sheetData, (progress) => {
        dispatch({ type: 'PROGRESS', payload: { progress } });
      });
    } catch (e) {
      dispatch({ type: 'FAILED' });
      return;
    }
    await delay(400);
    dispatch({ type: 'PROGRESS', payload: { progress: 100 } });
    await delay(200);
    dispatch({ type: 'COMPLETED' });
  }

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Container>
          {mode === 'initial' && (
            <div>
              <FileUploader setFile={onFileUploaded} />
              <Margin margin="40px 0 10px 0">
                <h6 onClick={onEnterDataManually}>
                  Or just manually enter your data
                </h6>
              </Margin>
            </div>
          )}
          {mode === 'mapping' && (
            <HeaderMapper
              parsed={parsedFile!}
              sheetDefinitions={sheets}
              onMappingsSet={onMappingsSet}
            />
          )}
          {mode === 'preview' && (
            <SheetDataEditor
              data={currentSheetData!}
              sheetDefinition={currentSheetDefinition!}
              sheetValidationErrors={validationErrors.filter(
                (error) => error.sheetId === currentSheetDefinition?.id
              )}
              onSubmit={onSubmit}
              setRowData={onCellChanged}
            />
          )}
          {['submit', 'failed', 'completed'].includes(mode) && (
            <Completed
              pending={mode === 'submit'}
              progress={importProgress}
              failed={mode === 'failed'}
            />
          )}
        </Container>
      </Root>
    </ThemeProvider>
  );
}
