import { CheckIcon } from '@heroicons/react/24/outline';
import CircularProgress from './CircularProgress';
import { useTranslations } from '../../i18';
import { Button } from '../../components';

function SuccessIcon() {
  return (
    <CheckIcon className="text-success absolute inset-0 m-auto h-12 w-12 stroke-4" />
  );
}

interface Props {
  progress: number;
  pending?: boolean;
  resetState: () => void;
}

export default function Uploading({ progress, pending, resetState }: Props) {
  const { t } = useTranslations();

  return (
    <div className="my-16 text-center">
      <div className="relative mx-auto h-24 w-24">
        <CircularProgress progress={progress} pending={pending} />
        {pending && (
          <div>
            <div className="absolute inset-0 flex items-center justify-center">
              <b className="text-lg">{progress}%</b>
            </div>
            <h2 className="text-2xl">{t('importer.loader.uploading')}</h2>
          </div>
        )}
        {!pending && <SuccessIcon />}
      </div>
      {!pending && (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl">{t('importer.loader.success')}</h2>
          <div className="h-5" />
          <Button variant="secondary" onClick={resetState}>
            {t('sheet.reset')}
          </Button>
        </div>
      )}
    </div>
  );
}
