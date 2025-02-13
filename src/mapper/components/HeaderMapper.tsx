import { Button, Col, Row } from '../../components';
import { ColumnMapping, ParsedFile, SheetDefinition } from '../../types';
import {
  calculateMappingExamples,
  calculateNewMappingsForCsvColumnMapingChanged,
} from '../utils';
import HeaderMapperRow from './HeaderMapperRow';

interface Props {
  parsed: ParsedFile;
  sheetDefinitions: SheetDefinition[];
  currentMapping: ColumnMapping[];
  onMappingsChanged: (mappings: ColumnMapping[]) => void;
  onMappingsSet: () => void;
}

export default function HeaderMapper({
  parsed,
  sheetDefinitions,
  currentMapping,
  onMappingsChanged,
  onMappingsSet,
}: Props) {
  const data = parsed.data;
  const csvHeaders = parsed.meta.fields!; // TODO THIS BRANCH: Check why it can be undefined

  const mappingSelectionOptions = sheetDefinitions.flatMap(
    (sheetDefinition) => {
      return sheetDefinition.columns.map((column) => {
        return {
          label: `${sheetDefinition.label} - ${column.label}`,
          value: {
            sheetId: sheetDefinition.id,
            sheetColumnId: column.id,
          },
        };
      });
    }
  );

  return (
    <div>
      <div>
        <h5>{parsed.data.length - 1} Rows Imported</h5>
      </div>
      {csvHeaders.map((header, columnIndex) => {
        const examples = calculateMappingExamples(data, header);
        const headerMappings =
          currentMapping.filter(
            (mapping) => mapping.csvColumnName === header
          ) ?? [];

        return (
          <HeaderMapperRow
            key={columnIndex}
            csvHeader={header}
            examples={examples}
            currentMappings={headerMappings}
            setMappings={(headerMappings) => {
              const newMappings = calculateNewMappingsForCsvColumnMapingChanged(
                currentMapping,
                header,
                headerMappings
              );

              onMappingsChanged(newMappings);
            }}
            mappingSelectionOptions={mappingSelectionOptions}
          />
        );
      })}
      <div className="my-5">
        <Row>
          <Col>
            <Button variant="secondary" outline>
              Back
            </Button>
          </Col>
          <Col>
            <div className="text-right">
              <Button onClick={onMappingsSet}>Confirm</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
