import Uploading from './Uploading';
import Failed from './Failed';
import { ImporterMode } from '../types';

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

  if (failed) {
    return <Failed onRetry={onRetry} onBackToPreview={onBackToPreview} />;
  }
  return (
    <Uploading progress={progress} pending={pending} resetState={resetState} />
  );
}
