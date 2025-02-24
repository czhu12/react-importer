import { Button } from '../../components';
import { useTranslations } from '../../i18';
import { ColumnMapping, ParsedFile, SheetDefinition } from '../../types';
import {
  areAllRequiredMappingsSet,
  calculateMappingExamples,
  calculateNewMappingsForCsvColumnMapingChanged,
  filterAlreadyUsedMappingOptions,
  getMappingAvailableSelectOptions,
} from '../utils';
import HeaderMapperRow from './HeaderMapperRow';

interface Props {
  parsed: ParsedFile;
  sheetDefinitions: SheetDefinition[];
  currentMapping: ColumnMapping[];
  onMappingsChanged: (mappings: ColumnMapping[]) => void;
  onMappingsSet: () => void;
  onBack: () => void;
}

export default function HeaderMapper({
  parsed,
  sheetDefinitions,
  currentMapping,
  onMappingsChanged,
  onMappingsSet,
  onBack,
}: Props) {
  const { t } = useTranslations();

  const data = parsed.data;
  const csvHeaders = parsed.meta.fields!; // TODO THIS BRANCH: Check why it can be undefined

  const allMapingSelectOptions =
    getMappingAvailableSelectOptions(sheetDefinitions);

  const mappingSelectionOptions = filterAlreadyUsedMappingOptions(
    allMapingSelectOptions,
    currentMapping
  );

  const mapingsValid = areAllRequiredMappingsSet(
    sheetDefinitions,
    currentMapping
  );

  return (
    <div>
      <div>
        <h5>
          {t('mapper.numberRowsImported', { count: parsed.data.length - 1 })}
        </h5>
      </div>
      {csvHeaders.map((header, columnIndex) => {
        const examples = calculateMappingExamples(data, header);
        const headerMapping =
          currentMapping.find((mapping) => mapping.csvColumnName === header) ??
          null;

        const selectOptions = [...mappingSelectionOptions];
        if (headerMapping) {
          const currentMappingOption = allMapingSelectOptions.find(
            (option) =>
              option.value.sheetId === headerMapping.sheetId &&
              option.value.sheetColumnId === headerMapping.sheetColumnId
          );
          if (currentMappingOption) {
            selectOptions.push(currentMappingOption);
          }
        }

        return (
          <HeaderMapperRow
            key={columnIndex}
            csvHeader={header}
            examples={examples}
            currentMapping={headerMapping}
            setMapping={(headerMapping) => {
              const newMappings = calculateNewMappingsForCsvColumnMapingChanged(
                currentMapping,
                header,
                headerMapping
              );

              onMappingsChanged(newMappings);
            }}
            mappingSelectionOptions={selectOptions}
          />
        );
      })}
      <div className="my-5 flex justify-between">
        <Button variant="secondary" outline onClick={onBack}>
          {t('mapper.back')}
        </Button>
        <Button onClick={onMappingsSet} disabled={!mapingsValid}>
          {t('mapper.confirm')}
        </Button>
      </div>
    </div>
  );
}
