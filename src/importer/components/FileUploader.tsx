import { useEffect, useRef } from 'preact/compat';
import Dropzone from 'dropzone';
import { Card, Button } from '../../components';

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
        <div className="flex">
          <div className="flex-none">
            <svg
              style={{ marginRight: '20px' }}
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              className="bi bi-cloud-arrow-up fill-primary"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
              />
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
            </svg>
          </div>
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
