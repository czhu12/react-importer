import { useReducer, useEffect, useState } from 'preact/compat';
import { useRef } from 'preact/hooks';

import FileUploader from './components/FileUploader';
import HeaderMapper from '../mapper/components/HeaderMapper';
import SheetDataEditor from '../sheet/components/SheetDataEditor';
import Completed from './components/Completed';
import { delay } from '../utils/timing';
import { buildInitialState, reducer } from './reducer';
import {
  CellChangedPayload,
  ColumnMapping,
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
import { Button, Root, Tooltip } from '../components';
import { TranslationProvider, useTranslations } from '../i18';
import BackToMappingButton from './components/BackToMappingButton';

function ImporterBody({
  theme,
  onComplete,
  allowManualDataEntry,
  sheets,
  onDataColumnsMapped,
  preventUploadOnValidationErrors,
}: ImporterDefinition) {
  const { t } = useTranslations();

  const isInitialRender = useRef(true);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [containerClasses, setContainerClasses] = useState<string>('');

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

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mode]);

  useEffect(() => {
    const getParentDimensions = () => {
      if (!targetRef.current) return 'h-screen w-full overflow-auto';

      const parent = targetRef.current.closest('.csv-importer')?.parentElement;

      if (!parent) return 'h-screen w-full overflow-auto';

      const computedStyle = window.getComputedStyle(parent);

      const height = computedStyle.getPropertyValue('max-height').trim();

      const width = computedStyle.getPropertyValue('max-width').trim();
      console.log('width', width);

      const heightClass =
        height && height !== 'none' ? `h-[${height}]` : 'h-screen';

      const widthClass = width && width !== 'none' ? `w-[${width}]` : 'w-full';

      return `${heightClass} ${widthClass} overflow-auto`;
    };
    const containerClasses = getParentDimensions();

    setContainerClasses(containerClasses);
  }, []);

  const currentSheetData = sheetData.find(
    (sheet) => sheet.sheetId === currentSheetId
  )!;

  const currentSheetDefinition = sheets.find(
    (sheet) => sheet.id === currentSheetId
  )!;

  const preventUploadOnErrors =
    typeof preventUploadOnValidationErrors === 'function'
      ? (preventUploadOnValidationErrors?.(validationErrors) ?? false)
      : (preventUploadOnValidationErrors ?? false);

  const preventUpload = preventUploadOnErrors && validationErrors.length > 0;

  function onFileUploaded(file: File) {
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

  function addEmptyRow() {
    dispatch({ type: 'ADD_EMPTY_ROW' });
  }

  function resetState() {
    dispatch({ type: 'RESET' });
  }

  async function onSubmit() {
    dispatch({ type: 'PROGRESS', payload: { progress: 0 } });
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

  function onBackToPreview() {
    dispatch({ type: 'PREVIEW' });
  }

  function onBackToUpload() {
    dispatch({ type: 'UPLOAD' });
  }

  function onBackToMapping() {
    dispatch({ type: 'MAPPING' });
  }

  return (
    <ThemeSetter theme={theme}>
      <Root ref={targetRef}>
        {mode === 'upload' && (
          <div className="mx-5 mt-5">
            <FileUploader setFile={onFileUploaded} />
            {allowManualDataEntry && (
              <div className="mt-10 mb-2.5">
                <p
                  onClick={onEnterDataManually}
                  className="text-csv-importer-primary hover:text-csv-importer-primary cursor-pointer decoration-2 opacity-90 hover:underline focus:underline focus:outline-none"
                >
                  {t('importer.uploader.enterManually')}
                </p>
              </div>
            )}
          </div>
        )}

        {mode === 'mapping' && (
          <div className={containerClasses}>
            <HeaderMapper
              parsed={parsedFile!}
              sheetDefinitions={sheets}
              currentMapping={columnMappings ?? []}
              onMappingsChanged={onMappingsChanged}
              onMappingsSet={onMappingsSet}
              onBack={onBackToUpload}
            />
          </div>
        )}
        {mode === 'preview' && (
          // TODO: Move these to separate component in future PR
          <div className={containerClasses}>
            <div className="flex h-full flex-col">
              <div className="flex-none">
                <SheetsSwitcher
                  activeSheetId={currentSheetId}
                  sheetDefinitions={sheets}
                  onSheetChange={(sheetId) =>
                    dispatch({ type: 'SHEET_CHANGED', payload: { sheetId } })
                  }
                  validationErrors={validationErrors}
                />
              </div>
              <div className="flex-1 overflow-auto">
                <SheetDataEditor
                  data={currentSheetData}
                  allData={sheetData}
                  sheetDefinition={currentSheetDefinition}
                  sheetValidationErrors={validationErrors.filter(
                    (error) => error.sheetId === currentSheetDefinition?.id
                  )}
                  setRowData={onCellChanged}
                  removeRows={onRemoveRows}
                  addEmptyRow={addEmptyRow}
                  resetState={resetState}
                />
              </div>
              <div className="flex-none">
                {currentSheetData.rows.length > 0 && (
                  <div className="my-5 flex justify-between">
                    <div>
                      {columnMappings != null && (
                        <BackToMappingButton
                          onBackToMapping={onBackToMapping}
                        />
                      )}
                    </div>
                    <Tooltip
                      tooltipText={t('importer.uploadBlocked')}
                      hidden={!preventUpload}
                    >
                      <Button onClick={onSubmit} disabled={preventUpload}>
                        {t('importer.upload')}
                      </Button>
                    </Tooltip>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {(mode === 'submit' || mode === 'failed' || mode === 'completed') && (
          <Completed
            mode={mode}
            progress={importProgress}
            onRetry={onSubmit}
            onBackToPreview={onBackToPreview}
            resetState={resetState}
          />
        )}
      </Root>
    </ThemeSetter>
  );
}

export default function Importer(props: ImporterDefinition) {
  return (
    <TranslationProvider selectedLocale={props.locale}>
      <ImporterBody {...props} />
    </TranslationProvider>
  );
}
