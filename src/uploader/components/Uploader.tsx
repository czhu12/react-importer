import { SheetDefinition } from '../../types';
import ImporterRequirements from './ImporterRequirements';
import FileUploader from './FileUploader';
import { getImporterRequirements } from '../utils';

interface Props {
  sheets: SheetDefinition[];
  onFileUploaded: (file: File) => void;
  onEnterDataManually: () => void;
  allowManualDataEntry?: boolean;
}

export default function Uploader({
  sheets,
  onFileUploaded,
  onEnterDataManually,
  allowManualDataEntry,
}: Props) {
  // TODO: Add translations
  const importerRequirements = getImporterRequirements(sheets);
  console.log(importerRequirements);
  return (
    <div className="flex h-full flex-col space-y-4">
      <div className="flex-none text-2xl">Upload a file</div>
      <div className="min-h-0 flex-auto">
        {/* TODO: Check this on mobile again */}
        <div className="flex h-full flex-col justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="md:flex-none lg:flex-1">
            <ImporterRequirements importerRequirements={importerRequirements} />
          </div>
          <div className="md:flex-none lg:flex-2">
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
