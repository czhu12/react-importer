import { Select } from '../../components';
import { ColumnMapping, MapperOption, MapperOptionValue } from '../../types';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface Props {
  csvHeader: string;
  currentMapping: MapperOptionValue | null;
  setMapping: (header: MapperOptionValue | null) => void;
  mappingSelectionOptions: MapperOption[];
  onMouseEnter: () => void;
}

export default function HeaderMapperSelection({
  csvHeader,
  setMapping,
  currentMapping,
  mappingSelectionOptions,
  onMouseEnter,
}: Props) {
  return (
    <div onMouseEnter={onMouseEnter}>
      <div className="flex items-center">
        <div className="mx-2.5 flex flex-1 justify-between">
          <div>{csvHeader.slice(0, 30)}</div>
          <div className="mx-5">
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </div>

        <div className="flex-1">
          <Select
            // TODO THIS BRANCH: Add back the following props
            // isSearchable
            clearable
            compareFunction={(a, b) => {
              if (a == null || b == null) {
                return false;
              }

              return (
                a.sheetColumnId === b.sheetColumnId && a.sheetId === b.sheetId
              );
            }}
            value={currentMapping}
            options={mappingSelectionOptions}
            onChange={(mapping) => setMapping(mapping as ColumnMapping | null)}
          />
        </div>
      </div>
    </div>
  );
}
