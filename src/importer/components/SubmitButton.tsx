import { Button, Col } from '../../components';

interface Props {
  onSubmit: () => void;
}

export default function SubmitButton({ onSubmit }: Props) {
  return (
    <div className="my-5">
      <div className="flex">
        <Col>
          <div className="text-right">
            <Button onClick={onSubmit}>Upload</Button>
          </div>
        </Col>
      </div>
    </div>
  );
}
