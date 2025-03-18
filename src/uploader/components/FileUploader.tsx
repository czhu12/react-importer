import { useRef } from 'preact/compat';
import { Button, Card } from '../../components';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '../../i18';
import { SUPPORTED_FILE_MIME_TYPES } from '../../constants';
import { formatFileSize, isFileBelowMaxSize } from '../utils';

interface Props {
  setFile: (file: File) => void;
  allowManualDataEntry?: boolean;
  onEnterDataManually?: () => void;
  maxFileSize?: number;
}

export default function FileUploader({
  setFile,
  allowManualDataEntry = true,
  onEnterDataManually,
  maxFileSize,
}: Props) {
  const { t, tHtml } = useTranslations();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validateAndSetFile = (file: File, maxFileSize?: number) => {
    if (!SUPPORTED_FILE_MIME_TYPES.includes(file.type)) {
      return;
    }
    if (isFileBelowMaxSize(file.size, maxFileSize)) {
      setFile(file);
    }
  };

  const handleFileSelect = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      validateAndSetFile(input.files[0], maxFileSize);
    }
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      validateAndSetFile(event.dataTransfer.files[0], maxFileSize);
    }
  };

  return (
    <Card variant="muted" className="h-full">
      <div className="flex h-full flex-col">
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e)}
          className="flex h-full flex-col"
        >
          <div className="flex flex-1 flex-col items-center justify-center">
            <CloudArrowUpIcon className="text-csv-importer-primary h-12 w-12" />
            <p className="mt-3">{t('uploader.dragAndDrop')}</p>
            {maxFileSize && (
              <div className="mt-3 text-sm text-gray-500">
                {tHtml('uploader.maxFileSize', {
                  size: <b>{formatFileSize(maxFileSize)}</b>,
                })}{' '}
                • CSV
              </div>
            )}
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
            onChange={(e) => handleFileSelect(e)}
          />
        </div>
      </div>
    </Card>
  );
}
