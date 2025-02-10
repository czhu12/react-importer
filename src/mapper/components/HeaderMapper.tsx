import { useState } from 'preact/hooks';
import { Button, Align, Margin, Col, Row } from '../../components';
import { ColumnMapping, ParsedFile, SheetDefinition } from '../../types';
import HeaderMapperRow from './HeaderMapperRow';
import { buildSuggestedHeaderMappings } from '../utils';

interface Props {
  parsed: ParsedFile;
  sheetDefinitions: SheetDefinition[];
  onMappingsSet: (mappings: ColumnMapping[]) => void;
}

export default function HeaderMapper({
  parsed,
  sheetDefinitions,
  onMappingsSet,
}: Props) {
  const data = parsed.data;
  const csvHeaders = parsed.meta.fields!; // TODO THIS BRANCH: Check why it can be undefined
  const options = sheetDefinitions.flatMap((sheetDefinition) => {
    return sheetDefinition.columns.map((column) => {
      return {
        label: `${sheetDefinition.label} - ${column.label}`,
        value: {
          sheetId: sheetDefinition.id,
          sheetColumnId: column.id,
        },
      };
    });
  });

  const [mappings, setMappings] = useState<ColumnMapping[]>(
    buildSuggestedHeaderMappings(sheetDefinitions, csvHeaders)
  );

  return (
    <div>
      <div>
        <h5>{parsed.data.length - 1} Rows Imported</h5>
      </div>
      {csvHeaders.map((header, columnIndex) => {
        const examples = data.slice(1, 4).map((d) => d[header]);
        const currentMapping =
          mappings.find((mapping) => mapping.csvColumnName === header) ?? null;

        return (
          <HeaderMapperRow
            key={columnIndex}
            csvHeader={header}
            examples={examples}
            currentMapping={currentMapping}
            setMapping={(headerMapping) => {
              const newMappings =
                headerMapping == null
                  ? mappings.filter((m) => m.csvColumnName !== header)
                  : mappings.map((mapping) => {
                      if (mapping.csvColumnName === header) {
                        return headerMapping;
                      }
                      return mapping;
                    });

              setMappings(newMappings);
            }}
            options={options}
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
              <Button onClick={() => onMappingsSet(mappings)}>Confirm</Button>
            </Align>
          </Col>
        </Row>
      </Margin>
    </div>
  );
}
