import { ColumnMapping, MapperOption, MapperOptionValue } from '../types';
import HeaderMapperSelection from './HeaderMapperSelection';

interface Props {
  csvHeader: string;
  mappingSelectionOptions: MapperOption[];
  currentMapping: ColumnMapping | null;
  setMapping: (mappings: MapperOptionValue | null) => void;
  onMouseEnter: () => void;
}

export default function HeaderMapperRow({
  mappingSelectionOptions,
  csvHeader,
  currentMapping,
  setMapping,
  onMouseEnter,
}: Props) {
  const currentHeaderOption =
    currentMapping == null
      ? null
      : (mappingSelectionOptions.find(
          (option) =>
            option.value.sheetId === currentMapping.sheetId &&
            option.value.sheetColumnId === currentMapping.sheetColumnId
        )?.value ?? null);

  return (
    <div className="my-5">
      <HeaderMapperSelection
        mappingSelectionOptions={mappingSelectionOptions}
        csvHeader={csvHeader}
        currentMapping={currentHeaderOption}
        setMapping={setMapping}
        onMouseEnter={onMouseEnter}
      />
    </div>
  );
}
