import { Align, Button, Col, Margin, Row } from '../../components';

interface Props {
  onSubmit: () => void;
}

export default function SubmitButton({ onSubmit }: Props) {
  return (
    <Margin margin="20px 0">
      <Row>
        <Col>
          <Align right>
            <Button onClick={onSubmit}>Upload</Button>
          </Align>
        </Col>
      </Row>
    </Margin>
  );
}
