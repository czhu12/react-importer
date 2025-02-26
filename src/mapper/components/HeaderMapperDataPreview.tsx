import { ImporterOutputFieldType } from '../../types';
import { useTranslations } from '../../i18';
interface Props {
  examples: ImporterOutputFieldType[];
  header: string;
}

const headerClass = 'py-4 text-left text-sm';
const cellClass =
  'text-sm whitespace-nowrap text-gray-900 py-2 border-t border-gray-300';

export default function HeaderMapperDataPreview({ examples, header }: Props) {
  const { t } = useTranslations();
  console.log('examples', examples);

  return (
    // TODO: Put this on our card and update the styling for the card
    header && (
      <div className="m-6 rounded-sm border border-gray-300 bg-white px-6 py-4">
        <table className="w-full divide-y divide-gray-300 text-left">
          <thead>
            <tr>
              <th className={headerClass}>Data preview for {header}</th>
            </tr>
          </thead>
          <tbody>
            {examples.map((e, idx) => {
              return (
                <tr key={idx}>
                  <td className={cellClass}>
                    {e || <i>{t('mapper.noData')}</i>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
}
