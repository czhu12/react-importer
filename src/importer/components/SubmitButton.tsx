import { Button, Col, Row } from '../../components';

interface Props {
  onSubmit: () => void;
}

export default function SubmitButton({ onSubmit }: Props) {
  return (
    <div className="my-5">
      <Row>
        <Col>
          <div className="text-right">
            <Button onClick={onSubmit}>Upload</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
