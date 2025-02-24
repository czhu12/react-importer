import { Card } from '../../components';
import { ImporterOutputFieldType } from '../../types';
import { ColumnMapping, MapperOption, MapperOptionValue } from '../types';
import HeaderMapperSelection from './HeaderMapperSelection';

interface Props {
  csvHeader: string;
  mappingSelectionOptions: MapperOption[];
  examples: ImporterOutputFieldType[];
  currentMapping: ColumnMapping | null;
  setMapping: (mappings: MapperOptionValue | null) => void;
}

export default function HeaderMapperRow({
  mappingSelectionOptions,
  csvHeader,
  examples,
  currentMapping,
  setMapping,
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
      <Card>
        <HeaderMapperSelection
          mappingSelectionOptions={mappingSelectionOptions}
          csvHeader={csvHeader}
          examples={examples}
          currentMapping={currentHeaderOption}
          setMapping={setMapping}
        />
      </Card>
    </div>
  );
}
