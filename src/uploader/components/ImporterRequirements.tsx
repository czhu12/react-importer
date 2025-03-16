import { ImporterRequirementsType } from '../types';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Tooltip } from '../../components/index';
import Alert from '../../components/Alert';
import { useTranslations } from '../../i18';

interface Props {
  importerRequirements: ImporterRequirementsType;
  importerInformation?: string;
}

const RequirementInfo = ({
  importerRequirements,
}: {
  importerRequirements: ImporterRequirementsType;
}) => {
  const { t } = useTranslations();

  return (
    <div className="h-full w-full space-y-5 overflow-y-auto">
      {Object.entries(importerRequirements).map(([groupName, requirements]) => (
        <div key={groupName} className="me-3">
          <div className="my-3 border-b border-gray-200 pb-4 text-sm font-light uppercase">
            {t(`uploader.${groupName}Columns`)}
          </div>
          <div className="mt-4">
            {requirements.map((requirement) => (
              <div
                key={requirement.columnId}
                className="my-3 flex justify-between"
              >
                <div className="text-xs">{requirement.columnLabel}</div>
                <div className="text-xs font-light">
                  <Tooltip
                    tooltipText={
                      requirement?.importerInformation ||
                      t(`uploader.${groupName}ColumnsTooltip`)
                    }
                  >
                    <InformationCircleIcon className="size-5 text-gray-500" />
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ImporterRequirements({
  importerRequirements,
  importerInformation,
}: Props) {
  const { t } = useTranslations();

  return (
    <div className="flex h-full flex-col space-y-5">
      <div className="me-3">
        <Alert>
          {importerInformation || t('uploader.importerInformation')}
        </Alert>
      </div>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <RequirementInfo importerRequirements={importerRequirements} />
      </div>
    </div>
  );
}
