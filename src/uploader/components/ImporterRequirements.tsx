import { ImporterRequirementsType } from '../../types';
import { Alert, Button, Card } from '../../components';
import { useTranslations } from '../../i18';
import RequirementsList from './RequirementsList';
import { ExcelIcon } from '../../icons';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface Props {
  importerRequirements: ImporterRequirementsType;
  importerInformation?: string;
  sampleFileUrl?: string;
}

export default function ImporterRequirements({
  importerRequirements,
  importerInformation,
  sampleFileUrl,
}: Props) {
  const { t } = useTranslations();

  return (
    <div className="flex h-full flex-col space-y-5">
      <div className="me-3">
        <Alert>
          {importerInformation || t('uploader.importerInformation')}
        </Alert>
      </div>
      {sampleFileUrl && (
        <Card className="me-3">
          <div className="flex flex-row justify-between">
            <div>
              <div className="flex flex-row items-center gap-2 text-sm">
                <ExcelIcon className="size-7" /> {t('uploader.sampleFile')}
              </div>
              <div className="mt-2 text-xs">
                {t('uploader.downloadSampleFile')}
              </div>
            </div>
            <div className="ms-2 flex flex-row items-center">
              <Button
                variant="tertiary"
                size="md"
                onClick={() => {
                  window.open(sampleFileUrl, '_blank');
                }}
              >
                <ArrowDownTrayIcon className="size-5" />
              </Button>
            </div>
          </div>
        </Card>
      )}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <RequirementsList importerRequirements={importerRequirements} />
      </div>
    </div>
  );
}
