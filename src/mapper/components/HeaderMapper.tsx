import { useMemo } from 'preact/compat';
import { useState } from 'preact/compat';
import { Button } from '../../components';
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
  const [hoveredCsvHeader, setHoveredCsvHeader] = useState<string | null>(null);

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
    if (!hoveredCsvHeader) return [];
    return calculateMappingExamples(data, hoveredCsvHeader);
  }, [hoveredCsvHeader, data]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex-none text-2xl">Review and confirm each mapping</div>
      {/* TODO: Add error message here if mappings not valid */}
      <div className="min-h-0 flex-auto">
        <div className="flex h-full justify-between space-x-5">
          <div className="flex flex-2 flex-col">
            <div className="my-5 flex text-sm font-light uppercase">
              <div className="flex-1">{t('mapper.incomingColumn')}</div>
              <div className="flex-1">{t('mapper.destinationColumn')}</div>
            </div>
            <div className="flex-1 overflow-y-auto">
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
                      setHoveredCsvHeader(header);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto bg-gray-50">
            <HeaderMapperDataPreview
              examples={hoveredExamples}
              csvHeader={hoveredCsvHeader ?? ''}
            />
          </div>
        </div>
      </div>
      <div className="mt-auto flex-none">
        <div className="my-5 flex justify-between">
          <Button variant="secondary" outline onClick={onBack}>
            {t('mapper.back')}
          </Button>
          <Button onClick={onMappingsSet} disabled={!mapingsValid}>
            {t('mapper.confirm')}
          </Button>
        </div>
      </div>
    </div>
  );
}
