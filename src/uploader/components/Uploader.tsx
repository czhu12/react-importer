import { SheetDefinition } from '../../types';
import ImporterRequirements from './ImporterRequirements';
import FileUploader from './FileUploader';
import { getImporterRequirements } from '../utils';
import { useTranslations } from '../../i18';

interface Props {
  sheets: SheetDefinition[];
  onFileUploaded: (file: File) => void;
  onEnterDataManually: () => void;
  allowManualDataEntry?: boolean;
  importerInformation?: string;
}

export default function Uploader({
  sheets,
  onFileUploaded,
  onEnterDataManually,
  allowManualDataEntry,
  importerInformation,
}: Props) {
  const importerRequirements = getImporterRequirements(sheets);
  const { t } = useTranslations();
  return (
    <div className="flex h-full flex-col space-y-4">
      <div className="flex-none text-2xl">{t('uploader.uploadAFile')}</div>
      <div className="min-h-0 flex-auto">
        <div className="flex h-full flex-col-reverse gap-5 md:flex-row">
          <div className="h-full flex-1 lg:flex-1">
            <ImporterRequirements
              importerRequirements={importerRequirements}
              importerInformation={importerInformation}
            />
          </div>
          <div className="flex-1 lg:flex-2">
            <FileUploader
              setFile={onFileUploaded}
              allowManualDataEntry={allowManualDataEntry}
              onEnterDataManually={onEnterDataManually}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
