import { ImporterOutputFieldType } from '../../types';
import { useTranslations } from '../../i18';

interface Props {
  examples: ImporterOutputFieldType[] | null;
  header: string;
}

const headerClass = 'py-4 text-left text-sm';
const cellClass = 'text-sm text-gray-900 py-2 border-t border-gray-300 h-10';

export default function HeaderMapperDataPreview({ examples, header }: Props) {
  const { t } = useTranslations();

  return (
    header && (
      <div className="m-6 rounded-sm border border-gray-300 bg-white px-6 py-4">
        <table className="w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th className={headerClass}>Data preview for {header}</th>
            </tr>
          </thead>
          <tbody>
            {examples?.map((e, idx) => (
              <tr key={idx}>
                <td className={cellClass}>
                  {e ||
                    (idx === 0 && (
                      <span className="text-gray-500 italic">
                        {t('mapper.noData')}
                      </span>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}
