import { useTranslations } from '../../i18';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Uploading from './Uploading';

function Failed() {
  const { t } = useTranslations();

  return (
    <div className="my-16 text-center">
      <div className="relative mx-auto h-12 w-12">
        <XMarkIcon className="text-danger" />
      </div>
      <h2 className="text-2xl">{t('importer.loader.failed')}</h2>
    </div>
  );
}

interface Props {
  progress: number;
  pending?: boolean;
  failed?: boolean;
}

export default function Completed({ progress, pending, failed }: Props) {
  if (failed) {
    return <Failed />;
  }
  return <Uploading progress={progress} pending={pending} />;
}
