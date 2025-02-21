import { useTranslations } from '../../i18';
import { CheckIcon } from '@heroicons/react/24/outline';
import Failed from './Failed';
import { ImporterMode } from '../types';

function CircularProgress({ progress }: { progress: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="mx-auto h-24 w-24 rotate-[-90deg]" width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        className="text-gray-200"
        strokeWidth="10"
        stroke="currentColor"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="stroke-success transition-[stroke-dashoffset] duration-500"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <CheckIcon className="text-success absolute inset-0 m-auto h-12 w-12 stroke-4" />
  );
}

function Uploading({
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
        <CircularProgress progress={progress} />
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

type Mode = Extract<ImporterMode, 'submit' | 'failed' | 'completed'>;

interface Props {
  progress: number;
  mode: Mode;
  onRetry: () => void;
  onBackToPreview: () => void;
}

export default function Completed({
  progress,
  mode,
  onRetry,
  onBackToPreview,
}: Props) {
  const failed = mode === 'failed';
  const pending = mode === 'submit';

  if (failed) {
    return <Failed onRetry={onRetry} onBackToPreview={onBackToPreview} />;
  }
  return <Uploading progress={progress} pending={pending} />;
}
