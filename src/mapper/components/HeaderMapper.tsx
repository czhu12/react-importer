import { Button } from '../../components';
import { useTranslations } from '../../i18';
import { ColumnMapping, ParsedFile, SheetDefinition } from '../../types';
import {
  calculateMappingExamples,
  calculateNewMappingsForCsvColumnMapingChanged,
} from '../utils';
import HeaderMapperRow from './HeaderMapperRow';

interface Props {
  parsed: ParsedFile;
  sheetDefinitions: SheetDefinition[];
  currentMapping: ColumnMapping[];
  onMappingsChanged: (mappings: ColumnMapping[]) => void;
  onMappingsSet: () => void;
}

export default function HeaderMapper({
  parsed,
  sheetDefinitions,
  currentMapping,
  onMappingsChanged,
  onMappingsSet,
}: Props) {
  const { t } = useTranslations();

  const data = parsed.data;
  const csvHeaders = parsed.meta.fields!; // TODO THIS BRANCH: Check why it can be undefined

  const mappingSelectionOptions = sheetDefinitions.flatMap(
    (sheetDefinition) => {
      return sheetDefinition.columns.map((column) => {
        return {
          label: `${sheetDefinition.label} - ${column.label}`,
          value: {
            sheetId: sheetDefinition.id,
            sheetColumnId: column.id,
          },
        };
      });
    }
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
        const headerMappings =
          currentMapping.filter(
            (mapping) => mapping.csvColumnName === header
          ) ?? [];

        return (
          <HeaderMapperRow
            key={columnIndex}
            csvHeader={header}
            examples={examples}
            currentMappings={headerMappings}
            setMappings={(headerMappings) => {
              const newMappings = calculateNewMappingsForCsvColumnMapingChanged(
                currentMapping,
                header,
                headerMappings
              );

              onMappingsChanged(newMappings);
            }}
            mappingSelectionOptions={mappingSelectionOptions}
          />
        );
      })}
      <div className="my-5 flex justify-between">
        <Button variant="secondary" outline>
          {t('mapper.back')}
        </Button>
        <Button onClick={onMappingsSet}> {t('mapper.confirm')}</Button>
      </div>
    </div>
  );
}
