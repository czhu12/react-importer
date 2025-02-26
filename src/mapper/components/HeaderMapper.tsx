import { useMemo } from 'preact/compat';
import { useState } from 'preact/compat';
import { Button, Tooltip } from '../../components';
import { useTranslations } from '../../i18';
import { ColumnMapping, ParsedFile, SheetDefinition } from '../../types';
import {
  areAllRequiredMappingsSet,
  calculateMappingExamples,
  calculateNewMappingsForCsvColumnMapingChanged,
  useMappingAvailableSelectOptions,
} from '../utils';
import HeaderMapperDataPreview from './HeaderMapperDataPreview';
import HeaderMapperSelection from './HeaderMapperSelection';

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
  const [hoveredHeader, setHoveredHeader] = useState<string | null>(null);

  const data = parsed.data;
  const csvHeaders = parsed.meta.fields!; // TODO THIS BRANCH: Check why it can be undefined

  const mappingSelectOptions = useMappingAvailableSelectOptions(
    sheetDefinitions,
    currentMapping
  );

  const mapingsValid = areAllRequiredMappingsSet(
    sheetDefinitions,
    currentMapping
  );

  const hoveredExamples = useMemo(() => {
    if (!hoveredHeader) return [];
    return calculateMappingExamples(data, hoveredHeader);
  }, [hoveredHeader, data]);

  return (
    <div>
      <div className="text-2xl">Review and confirm each mapping</div>
      <div className="flex justify-between space-x-5">
        <div className="flex-2">
          <div className="text-md my-5 flex font-light uppercase">
            <div className="flex-1">Incoming Columns</div>
            <div className="flex-1">Destination Columns</div>
          </div>
          {csvHeaders.map((header, columnIndex) => {
            const headerMapping =
              currentMapping.find(
                (mapping) => mapping.csvColumnName === header
              ) ?? null;

            return (
              <HeaderMapperSelection
                key={columnIndex}
                csvHeader={header}
                currentMapping={headerMapping}
                setMapping={(headerMapping) => {
                  const newMappings =
                    calculateNewMappingsForCsvColumnMapingChanged(
                      currentMapping,
                      header,
                      headerMapping
                    );

                  onMappingsChanged(newMappings);
                }}
                mappingSelectionOptions={mappingSelectOptions}
                onMouseEnter={() => {
                  setHoveredHeader(header);
                }}
              />
            );
          })}
        </div>
        <div className="flex-1 bg-gray-50">
          <HeaderMapperDataPreview
            examples={hoveredExamples}
            header={hoveredHeader ?? ''}
          />
        </div>
      </div>
      <div className="my-5 flex justify-between">
        <Button variant="secondary" outline onClick={onBack}>
          {t('mapper.back')}
        </Button>
        <Tooltip
          tooltipText={t('mapper.mappingsNotValidTooltip')}
          hidden={mapingsValid}
        >
          <Button onClick={onMappingsSet} disabled={!mapingsValid}>
            {t('mapper.confirm')}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
