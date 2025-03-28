import Uploading from './Uploading';
import Failed from './Failed';
import { ImporterMode } from '../types';
import { Card } from '../../components';
type Mode = Extract<ImporterMode, 'submit' | 'failed' | 'completed'>;

interface Props {
  progress: number;
  mode: Mode;
  onRetry: () => void;
  onBackToPreview: () => void;
  resetState: () => void;
}

export default function Completed({
  progress,
  mode,
  onRetry,
  onBackToPreview,
  resetState,
}: Props) {
  const failed = mode === 'failed';
  const pending = mode === 'submit';

  return (
    <div className="flex h-full p-10">
      <Card className="flex h-full w-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          {failed ? (
            <Failed onRetry={onRetry} onBackToPreview={onBackToPreview} />
          ) : (
            <Uploading
              progress={progress}
              pending={pending}
              resetState={resetState}
            />
          )}
        </div>
      </Card>
    </div>
  );
}
