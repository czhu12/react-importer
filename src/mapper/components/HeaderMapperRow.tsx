import { Card } from '../../components';
import { ImporterOutputFieldType } from '../../types';
import { ColumnMapping, MapperOption, MapperOptionValue } from '../types';
import HeaderMapperSelection from './HeaderMapperSelection';

interface Props {
  csvHeader: string;
  mappingSelectionOptions: MapperOption[];
  usedMappingSelectionOptions: MapperOption[];
  examples: ImporterOutputFieldType[];
  currentMapping: ColumnMapping | null;
  setMapping: (mappings: MapperOptionValue | null) => void;
  optionLabel?: string;
}

export default function HeaderMapperRow({
  mappingSelectionOptions,
  usedMappingSelectionOptions,
  csvHeader,
  examples,
  currentMapping,
  setMapping,
  optionLabel,
}: Props) {
  const currentHeaderOption =
    currentMapping == null
      ? null
      : (usedMappingSelectionOptions.find(
          (option) =>
            option.value.sheetId === currentMapping.sheetId &&
            option.value.sheetColumnId === currentMapping.sheetColumnId
        )?.value ?? null);

  return (
    <div className="my-5">
      <Card>
        <HeaderMapperSelection
          mappingSelectionOptions={mappingSelectionOptions}
          usedMappingSelectionOptions={usedMappingSelectionOptions}
          csvHeader={csvHeader}
          examples={examples}
          currentMapping={currentHeaderOption}
          setMapping={setMapping}
          optionLabel={optionLabel}
        />
      </Card>
    </div>
  );
}
