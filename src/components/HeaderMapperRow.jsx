import React from 'react';
import Select from 'react-select';
import { Card, Margin, Button, Row, Col, Padded, Table, Align } from './common'

const percentage = (a, b) => {
  return Math.round((a / b * 100) * 10) / 10;
}

const MappingStatistics = ({ fieldStatistics, selectedField, }) => {
  const total = fieldStatistics.total;
  const counts = fieldStatistics.statistics?.counts;
  const errorTypeCounts = fieldStatistics.statistics?.errorTypeCounts;
  if (!counts || !errorTypeCounts) {
    return <div></div>
  }
  return (
    <div>
      {selectedField && <div>Matched to <b>{selectedField.label}</b></div>}
      {!selectedField && <div><b>No match detected</b></div>}
      <br />
      <div>
        <svg style={{ marginRight: "10px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7f8c8d" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>

        <b>{percentage(total - counts.isNull, total)}%</b> of your rows have a value for this column
      </div>
      {errorTypeCounts.total === 0 && (
        <div>
          <svg style={{marginRight: "10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2ecc71" className="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
          </svg>

          All rows pass validation for this column.
        </div>
      )}
      {errorTypeCounts.total > 0 && (
        <div>
          <svg style={{marginRight: "10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f39c12" className="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>

          {(errorTypeCounts.total / total < 0.02) && <span><b>{errorTypeCounts.total}</b> rows fail validation (repair on next step)</span>}
          {(errorTypeCounts.total / total >= 0.02) && <span><b>{percentage(errorTypeCounts.total, total)}%</b> of rows fail validation (repair on next step)</span>}
        </div>
      )}
    </div>
  );
}
const HeaderMapperSelection = ({header, examples, setHeader, selectedHeader, options}) => {
  return (
    <div>
      <Margin margin="20px 0">
        <Row>
          <Col verticallyCenter spaceBetween>
            <Margin margin="0 10px">{header.slice(0, 30)}</Margin>
            <Padded padding="0 20px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
            </Padded>
          </Col>
          <Col>
            <Select isClearable={true} isSearchable={true} value={selectedHeader} options={options} onChange={setHeader} />
          </Col>
        </Row>
      </Margin>
      <Table>
        <tbody>
          {examples.map((e, idx) => {
            return (
              <tr key={idx}>
                <td style={{ backgroundColor: '#ecf0f1', textAlign: 'center', width: "40px" }}>
                  {idx}
                </td>
                <td style={{ padding: '10px 20px' }}>
                  {e || <i>No Data</i>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

const HeaderMapperRow = ({options, header, examples, headerMapping, setHeaderMapping, fieldStatistics}) => {
  let block = null;
  if (headerMapping.confirmed) {
    block = (
      <Row>
        <Col>
          <Row>
            <Col verticallyCenter spaceBetween>
              <Margin margin="0 10px">{header.slice(0, 30)}</Margin>
              <Padded padding="0 20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </Padded>
            </Col>
            <Col>
              <Select isDisabled={true} value={headerMapping.selectedField} />
            </Col>
          </Row>
        </Col>
        <Col spaceBetween verticallyCenter>
          <div>
            <svg style={{margin: "-2px 10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2ecc71" className="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
            </svg>
            Confirmed
          </div>

          <Button onClick={() => {
            setHeaderMapping({
              ...headerMapping,
              confirmed: false,
            })
          }}>Edit</Button>
        </Col>
      </Row>
    );
  } else if (headerMapping.ignored) {
    block = (
      <Row>
        <Col verticallyCenter>
          <Margin margin="0 10px">{ header }</Margin>
        </Col>
        <Col spaceBetween verticallyCenter>
          <div>
            <svg style={{margin: "-2px 10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
            </svg>
            Ignored
          </div>

          <Button onClick={() => {
            setHeaderMapping({
              ...headerMapping,
              selectedField: null,
              ignored: false,
              name: null,
            })
          }}>Edit</Button>
        </Col>
      </Row>
    );
  } else {
    block = (
      <Row>
        <Col>
          <HeaderMapperSelection
            options={options}
            header={header}
            examples={examples}
            selectedHeader={headerMapping.selectedField}
            setHeader={(selectedField) => {
              setHeaderMapping({
                ...headerMapping,
                selectedField,
                ignored: false,
                name: header,
              })
            }}
          />
        </Col>
        <Col>
          <Padded
            padding="20px 0 0 20px"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "90%",
              justifyContent: "space-between"
            }}>
            <div>
              {headerMapping.selectedField && (
                <MappingStatistics selectedField={headerMapping.selectedField} fieldStatistics={fieldStatistics} />
              )}
            </div>
            <div>
              {
                headerMapping.selectedField && 
                <Button style={{ marginRight: '10px' }} variant="success" onClick={() => {
                  setHeaderMapping({ ...headerMapping, confirmed: true });
                }}>Confirm mapping</Button>
              }
              <Button variant="secondary" outline onClick={() => {
                setHeaderMapping({ ...headerMapping, ignored: true });
              }}>Ignore this column</Button>
            </div>
          </Padded>
        </Col>
      </Row>
    );
  }
  return (
    <Margin margin="20px 0">
      <Card>{block}</Card>
    </Margin>
  );
}
export default HeaderMapperRow;