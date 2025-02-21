import { CheckIcon } from '@heroicons/react/24/outline';
import CircularProgress from './CircularProgress';
import { useTranslations } from '../../i18';

function SuccessIcon() {
  return (
    <CheckIcon className="text-success absolute inset-0 m-auto h-12 w-12 stroke-4" />
  );
}

export default function Uploading({
  progress,
  pending,
}: {
  progress: number;
  pending?: boolean;
}) {
  const { t } = useTranslations();

  return (
    <div className="my-16 text-center">
      <div className="relative mx-auto h-24 w-24">
        <CircularProgress progress={progress} pending={pending} />
        {!pending && <SuccessIcon />}
        {pending && (
          <div className="absolute inset-0 flex items-center justify-center">
            <b className="text-lg">{progress}%</b>
          </div>
        )}
      </div>
      {pending && (
        <h2 className="text-2xl">{t('importer.loader.uploading')}</h2>
      )}
      {!pending && <h2 className="text-2xl">{t('importer.loader.success')}</h2>}
    </div>
  );
}
