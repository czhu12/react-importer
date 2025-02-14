import { Button } from '../../components';

interface Props {
  onSubmit: () => void;
}

export default function SubmitButton({ onSubmit }: Props) {
  return (
    <div className="my-5">
      <div className="flex">
        <div className="flex-1">
          <div className="text-right">
            <Button onClick={onSubmit}>Upload</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
