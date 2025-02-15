import { useReducer } from 'preact/compat';

import FileUploader from './components/FileUploader';
import HeaderMapper from '../mapper/components/HeaderMapper';
import SheetDataEditor from '../sheet/components/SheetDataEditor';
import Completed from './components/Completed';
import { Root } from '../components';
import { delay } from '../utils/timing';
import { buildInitialState, reducer } from './reducer';
import {
  CellChangedPayload,
  ColumnMapping,
  FileWithPath,
  ImporterDefinition,
  RemoveRowsPayload,
} from '../types';
import { ThemeSetter } from '../theme/ThemeSetter';
import { parseCsv } from '../parser';
import { getMappedData } from '../mapper';
import { filterEmptyRows } from '../utils';
import { applyTransformations } from '../transformers';
import { buildSuggestedHeaderMappings } from '../mapper/utils';
import { NUMBER_OF_EMPTY_ROWS_FOR_MANUAL_DATA_INPUT } from '../constants';
import SheetsSwitcher from '../sheet/components/SheetsSwitcher';
import { Button } from '../components';
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
      columnMappings,
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

        dispatch({
          type: 'COLUMN_MAPPING_CHANGED',
          payload: {
            mappings: buildSuggestedHeaderMappings(
              sheets,
              newParsed.meta.fields! // TODO THIS BRANCH: Check why it can be undefined
            ),
          },
        });
      },
    });
  }

  function onEnterDataManually() {
    dispatch({
      type: 'ENTER_DATA_MANUALLY',
      payload: {
        sheetDefinitions: sheets,
        amountOfEmptyRowsToAdd: NUMBER_OF_EMPTY_ROWS_FOR_MANUAL_DATA_INPUT,
      },
    });
  }

  function onMappingsChanged(mappings: ColumnMapping[]) {
    dispatch({
      type: 'COLUMN_MAPPING_CHANGED',
      payload: { mappings },
    });
  }

  async function onMappingsSet() {
    const mappedData = getMappedData(sheets, columnMappings ?? [], parsedFile!);

    const newMappedData =
      onDataColumnsMapped != null
        ? await onDataColumnsMapped(mappedData)
        : mappedData;

    dispatch({ type: 'DATA_MAPPED', payload: { mappedData: newMappedData } });
  }

  function onCellChanged(payload: CellChangedPayload) {
    dispatch({ type: 'CELL_CHANGED', payload });
  }

  function onRemoveRows(payload: RemoveRowsPayload) {
    dispatch({ type: 'REMOVE_ROWS', payload });
  }

  async function onSubmit() {
    dispatch({ type: 'SUBMIT' });
    try {
      // TODO THIS BRANCH: Should we filter invalid data?
      const data = applyTransformations(
        sheets,
        sheetData.map((d) => ({ ...d, rows: filterEmptyRows(d) }))
      );

      await onComplete(data, (progress) => {
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
    <ThemeSetter theme={theme}>
      <Root>
        {mode === 'initial' && (
          <div>
            <FileUploader setFile={onFileUploaded} />
            <div className="mt-10 mb-2.5">
              <h6 onClick={onEnterDataManually}>
                Or just manually enter your data
              </h6>
            </div>
          </div>
        )}
        {mode === 'mapping' && (
          <HeaderMapper
            parsed={parsedFile!}
            sheetDefinitions={sheets}
            currentMapping={columnMappings ?? []}
            onMappingsChanged={onMappingsChanged}
            onMappingsSet={onMappingsSet}
          />
        )}
        {mode === 'preview' && (
          <>
            <SheetsSwitcher
              activeSheetId={currentSheetId}
              sheetDefinitions={sheets}
              onSheetChange={(sheetId) =>
                dispatch({ type: 'SHEET_CHANGED', payload: { sheetId } })
              }
              validationErrors={validationErrors}
            />
            <SheetDataEditor
              data={currentSheetData!}
              allData={sheetData}
              sheetDefinition={currentSheetDefinition!}
              sheetValidationErrors={validationErrors.filter(
                (error) => error.sheetId === currentSheetDefinition?.id
              )}
              setRowData={onCellChanged}
              removeRows={onRemoveRows}
            />
            <div className="my-5 text-right">
              <Button onClick={onSubmit}>Upload</Button>
            </div>
          </>
        )}
        {['submit', 'failed', 'completed'].includes(mode) && (
          <Completed
            pending={mode === 'submit'}
            progress={importProgress}
            failed={mode === 'failed'}
          />
        )}
      </Root>
    </ThemeSetter>
  );
}
