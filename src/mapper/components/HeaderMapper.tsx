import { Button, Align, Margin, Col, Row } from '../../components';
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
        const headerMapping =
          currentMapping.find((mapping) => mapping.csvColumnName === header) ??
          null;

        return (
          <HeaderMapperRow
            key={columnIndex}
            csvHeader={header}
            examples={examples}
            currentMapping={headerMapping}
            setMapping={(headerMapping) => {
              const newMappings = calculateNewMappingsForCsvColumnMapingChanged(
                currentMapping,
                header,
                headerMapping
              );

              onMappingsChanged(newMappings);
            }}
            mappingSelectionOptions={mappingSelectionOptions}
          />
        );
      })}
      <Margin margin="20px 0">
        <Row>
          <Col>
            <Button outline>Back</Button>
          </Col>
          <Col>
            <Align right>
              <Button onClick={onMappingsSet}>Confirm</Button>
            </Align>
          </Col>
        </Row>
      </Margin>
    </div>
  );
}
