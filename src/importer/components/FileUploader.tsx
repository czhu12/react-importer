import { useRef } from 'preact/compat';
import { Card, Button } from '../../components';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '../../i18';
import { SUPPORTED_FILE_MIME_TYPES } from '../../constants';

interface Props {
  setFile: (file: File) => void;
}

export default function FileUploader({ setFile }: Props) {
  const { t } = useTranslations();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      if (SUPPORTED_FILE_MIME_TYPES.includes(file.type)) {
        setFile(file);
      }
    }
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      if (SUPPORTED_FILE_MIME_TYPES.includes(file.type)) {
        setFile(file);
      }
    }
  };

  return (
    <Card
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="p-7.5">
        <div className="flex flex-col items-center justify-center">
          <CloudArrowUpIcon className="text-primary mb-3 h-12 w-12" />

          <p className="mb-3">{t('importer.uploader.dragAndDrop')}</p>
          <div className="text-sm text-gray-500">
            {t('importer.uploader.fileSizeLimit', { limit: '20MB' })} • CSV
          </div>

          <div className="mt-3">
            <Button>{t('importer.uploader.browseFiles')}</Button>
          </div>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept={SUPPORTED_FILE_MIME_TYPES.join(',')}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
    </Card>
  );
}
