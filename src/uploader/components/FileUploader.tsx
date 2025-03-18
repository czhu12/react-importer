import { useRef } from 'preact/compat';
import { Button, Card } from '../../components';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '../../i18';
import { SUPPORTED_FILE_MIME_TYPES } from '../../constants';

interface Props {
  setFile: (file: File) => void;
  allowManualDataEntry?: boolean;
  onEnterDataManually?: () => void;
}

export default function FileUploader({
  setFile,
  allowManualDataEntry = true,
  onEnterDataManually,
}: Props) {
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
    <Card variant="muted" className="h-full">
      <div className="flex h-full flex-col">
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="flex h-full flex-col"
        >
          <div className="flex flex-1 flex-col items-center justify-center">
            <CloudArrowUpIcon className="text-csv-importer-primary mb-3 h-12 w-12" />
            <p className="mb-3">{t('uploader.dragAndDrop')}</p>
            <div className="mt-3">
              <Button>{t('uploader.browseFiles')}</Button>
            </div>
            {allowManualDataEntry && (
              <div className="mt-3 text-sm">
                <p
                  onClick={onEnterDataManually}
                  className="text-csv-importer-primary hover:text-csv-importer-primary cursor-pointer decoration-2 opacity-90 hover:underline focus:underline focus:outline-none"
                >
                  {t('uploader.enterManually')}
                </p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept={SUPPORTED_FILE_MIME_TYPES.join(',')}
            style={{ display: 'none' }}
            onChange={handleFileSelect}
          />
        </div>
      </div>
    </Card>
  );
}
