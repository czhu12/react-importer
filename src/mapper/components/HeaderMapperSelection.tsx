import { Col, Margin, Padded, Row, Table, Select } from '../../components';
import { ImporterOutputFieldType, MapperOption } from '../../types';

interface Props {
  csvHeader: string;
  examples: ImporterOutputFieldType[];
  currentMapping: MapperOption | null;
  setMapping: (header: MapperOption | null) => void;
  mappingSelectionOptions: MapperOption[];
}

export default function HeaderMapperSelection({
  csvHeader,
  examples,
  setMapping,
  currentMapping,
  mappingSelectionOptions,
}: Props) {
  return (
    <div>
      <Margin margin="20px 0">
        <Row>
          <Col verticallyCenter spaceBetween>
            <Margin margin="0 10px">{csvHeader.slice(0, 30)}</Margin>
            <Padded padding="0 20px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Padded>
          </Col>
          <Col>
            <Select
              // TODO THIS BRANCH: Add back the following props
              // isClearable
              // isSearchable
              value={currentMapping}
              options={mappingSelectionOptions}
              onChange={setMapping}
            />
          </Col>
        </Row>
      </Margin>
      <Table>
        <tbody>
          {examples.map((e, idx) => {
            return (
              <tr key={idx}>
                <td
                  style={{
                    backgroundColor: '#ecf0f1',
                    textAlign: 'center',
                    width: '40px',
                  }}
                >
                  {idx}
                </td>
                <td style={{ padding: '10px 20px' }}>{e || <i>No Data</i>}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
