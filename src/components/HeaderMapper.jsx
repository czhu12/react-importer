import React from 'react';
import HeaderMapperRow from './HeaderMapperRow';
import { Button, Align, Margin, TextStyled, Col, Row } from './common'

const HeaderMapper = ({ parsed, fields, statistics, headerMappings, setHeaderMappings, missingRequiredFields, onComplete, restart }) => {
  const data = parsed.data;
  const options = fields.map(f => {
    return {
      label: f.label,
      value: f.key,
    }
  });

  const hasMissingRequiredFields = missingRequiredFields.length > 0;

  return (
    <div>
      <div>
        <h5>{parsed.data.length - 1} Rows Imported</h5>
      </div>
      {
        data[0].map((header, columnIndex) => {
          const examples = data.slice(1, 4).map(d => d[columnIndex]);
          const headerMapping = headerMappings[columnIndex] || {};
          const fieldStatistics = {
            total: statistics.total,
            statistics: statistics.statisticsByFieldKey[headerMapping.selectedField?.value],
          }
          return <HeaderMapperRow
            key={columnIndex}
            columnIndex={columnIndex}
            header={header}
            examples={examples}
            headerMapping={headerMapping}
            setHeaderMapping={(headerMapping) => {
              let newMappings = { ...headerMappings }
              headerMapping.columnIndex = columnIndex;
              newMappings[columnIndex] = headerMapping
              setHeaderMappings(newMappings);
            }}
            options={options}
            fieldStatistics={fieldStatistics}
          />
        })
      }
      <Margin margin="20px 0">
        <Align right>
          {hasMissingRequiredFields && (
            missingRequiredFields.map(f => {
              return (
                <div>
                  <TextStyled style={{ marginBottom: "15px" }} danger bold>
                    Missing mapping for {f.label}
                    <svg style={{marginLeft: "10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e74c3c" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </TextStyled>
                </div>
              );
            })
          )}
        </Align>
        <Row>
          <Col>
            <Button onClick={restart} outline>
              Back
            </Button>
          </Col>
          <Col>
            <Align right>
              <Button disabled={hasMissingRequiredFields} onClick={onComplete} variant="primary">
                Review
              </Button>
            </Align>
          </Col>
        </Row>
      </Margin>
    </div>
  );
};

export default HeaderMapper;
