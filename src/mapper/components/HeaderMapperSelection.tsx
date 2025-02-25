import { Select } from '../../components';
import { useTranslations } from '../../i18';
import {
  ColumnMapping,
  ImporterOutputFieldType,
  MapperOption,
  MapperOptionValue,
} from '../../types';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface Props {
  csvHeader: string;
  examples: ImporterOutputFieldType[];
  currentMapping: MapperOptionValue | null;
  setMapping: (header: MapperOptionValue | null) => void;
  mappingSelectionOptions: MapperOption[];
}

export default function HeaderMapperSelection({
  csvHeader,
  examples,
  setMapping,
  currentMapping,
  mappingSelectionOptions,
}: Props) {
  const { t } = useTranslations();

  return (
    <div>
      <div className="my-5 flex items-center">
        <div className="mx-2.5 flex-1">{csvHeader.slice(0, 30)}</div>
        <div className="mx-5">
          <ArrowRightIcon className="4" />
        </div>

        <div className="flex-4">
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
      <table className="w-full border border-black">
        <tbody>
          {examples.map((e, idx) => {
            return (
              <tr key={idx}>
                <td
                  style={{
                    backgroundColor: '#ecf0f1',
                    textAlign: 'center',
                    width: '40px',
                  }}
                >
                  {idx}
                </td>
                <td style={{ padding: '10px 20px' }}>
                  {e || <i>{t('mapper.noData')}</i>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
