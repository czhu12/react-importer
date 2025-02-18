import { useEffect, useRef } from 'preact/compat';
import Dropzone from 'dropzone';
import { Card, Button } from '../../components';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

interface Props {
  setFile: (file: File) => void;
}

export default function FileUploader({ setFile }: Props) {
  const dropzoneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!dropzoneRef.current) return;

    const dz = new Dropzone(dropzoneRef.current, {
      url: '/', // Required to pass, but we don't use it
      autoProcessQueue: false,
      maxFiles: 1,
      acceptedFiles: 'text/csv',
      clickable: true,
      previewsContainer: false,
    });

    dz.on('addedfile', (file) => {
      setFile(file);
    });

    return () => dz.destroy();
  }, [setFile]);

  return (
    <Card ref={dropzoneRef} style={{ cursor: 'pointer' }}>
      <div className="p-7.5" onClick={() => dropzoneRef.current?.click()}>
        <div className="mb-7.5">Pick a file</div>
        <div className="flex items-center">
          <CloudArrowUpIcon className="text-primary mr-3 h-12 w-12" />

          <div className="flex-grow">
            <h5 style={{ marginBottom: '10px' }}>
              Drag and drop your file here
            </h5>
            <div>Limit 20MB • CSV</div>
          </div>
          <div className="flex-none">
            <Button>Browse Files</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
