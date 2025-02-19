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
        <div className="mb-7.5">{t('importer.uploader.pickFile')}</div>
        <div className="flex items-center">
          <CloudArrowUpIcon className="text-primary mr-3 h-12 w-12" />

          <div className="flex-grow">
            <h5 style={{ marginBottom: '10px' }}>
              {t('importer.uploader.dragAndDrop')}
            </h5>
            <div>
              {t('importer.uploader.fileSizeLimit', { limit: '20MB' })} • CSV
            </div>
          </div>
          <div className="flex-none">
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
