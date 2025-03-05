import { ImporterOutputFieldType } from '../../types';
import { useTranslations } from '../../i18';

interface Props {
  examples: ImporterOutputFieldType[] | null;
  csvHeader: string | null;
}

export default function HeaderMapperDataPreview({
  examples,
  csvHeader,
}: Props) {
  const { t, tHtml } = useTranslations();

  return (
    csvHeader && (
      <div className="m-4 rounded-sm border border-gray-300 bg-white px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                    >
                      {tHtml('mapper.dataPreview', {
                        csvHeader: (
                          <div className="inline-flex items-center rounded-md px-1.5 py-0.5 bg-primary-extra-light text-xs font-medium">
                            {csvHeader}
                          </div>
                        ),
                      })}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {examples?.map((example, idx) => (
                    <tr key={idx}>
                      <td className="h-12 py-4 pr-3 pl-4 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {example ||
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
          </div>
        </div>
      </div>
    )
  );
}
