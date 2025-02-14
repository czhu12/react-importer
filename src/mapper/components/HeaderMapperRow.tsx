import { Card } from '../../components';
import { ImporterOutputFieldType } from '../../types';
import { ColumnMapping, MapperOption, MapperOptionValue } from '../types';
import HeaderMapperSelection from './HeaderMapperSelection';

interface Props {
  csvHeader: string;
  mappingSelectionOptions: MapperOption[];
  examples: ImporterOutputFieldType[];
  currentMappings: ColumnMapping[];
  setMappings: (mappings: MapperOptionValue[] | null) => void;
}

export default function HeaderMapperRow({
  mappingSelectionOptions,
  csvHeader,
  examples,
  currentMappings,
  setMappings,
}: Props) {
  const currentHeaderOptions = mappingSelectionOptions
    .filter((option) =>
      currentMappings.some(
        (mapping) =>
          mapping.sheetId === option.value.sheetId &&
          mapping.sheetColumnId === option.value.sheetColumnId
      )
    )
    .map((option) => option.value);

  return (
    <div className="my-5">
      <Card>
        <div className="flex">
          <div className="flex-1">
            <HeaderMapperSelection
              mappingSelectionOptions={mappingSelectionOptions}
              csvHeader={csvHeader}
              examples={examples}
              currentMappings={currentHeaderOptions}
              setMappings={setMappings}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
