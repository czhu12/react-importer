import { Col, Row, Table, Select } from '../../components';
import {
  ColumnMapping,
  ImporterOutputFieldType,
  MapperOption,
  MapperOptionValue,
} from '../../types';

interface Props {
  csvHeader: string;
  examples: ImporterOutputFieldType[];
  currentMappings: MapperOptionValue[] | null;
  setMappings: (header: MapperOptionValue[] | null) => void;
  mappingSelectionOptions: MapperOption[];
}

export default function HeaderMapperSelection({
  csvHeader,
  examples,
  setMappings,
  currentMappings,
  mappingSelectionOptions,
}: Props) {
  return (
    <div>
      <div className="my-5">
        <Row>
          <Col verticallyCenter spaceBetween>
            <div className="mx-2.5">{csvHeader.slice(0, 30)}</div>
            <div className="mx-5">
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
            </div>
          </Col>
          <Col>
            <Select<MapperOptionValue>
              // TODO THIS BRANCH: Add back the following props
              // isClearable
              // isSearchable
              compareFunction={(a, b) =>
                a.sheetColumnId === b.sheetColumnId && a.sheetId === b.sheetId
              }
              multiple
              value={currentMappings}
              options={mappingSelectionOptions}
              onChange={(mappings) =>
                setMappings(mappings as ColumnMapping[] | null)
              }
            />
          </Col>
        </Row>
      </div>
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
