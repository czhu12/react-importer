import {
  ExclamationCircleIcon,
  ArrowUturnRightIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import { useTranslations } from '../../i18';
import { Button } from '../../components';

interface Props {
  onRetry: () => void;
  onBackToPreview: () => void;
}

export default function Failed({ onRetry, onBackToPreview }: Props) {
  const { t } = useTranslations();

  return (
    <div className="my-16 text-center">
      <div className="relative mx-auto h-24 w-24">
        <ExclamationCircleIcon className="text-danger" />
      </div>
      <p className="mb-8 text-2xl">{t('importer.loader.failed')}</p>

      <Button onClick={onRetry} variant="primary">
        <div className="flex items-center">
          <ArrowUturnRightIcon className="mr-3 h-4 w-4" />
          {t('importer.loader.retry')}
        </div>
      </Button>

      <div className="mt-3" />

      <Button onClick={onBackToPreview} variant="tertiary">
        <div className="flex items-center">
          <PencilIcon className="mr-3 h-4 w-4" />
          {t('importer.loader.backToPreview')}
        </div>
      </Button>
    </div>
  );
}
