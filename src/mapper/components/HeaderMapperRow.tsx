import { Card, Margin, Row, Col } from '../../components';
import { ImporterOutputFieldType } from '../../types';
import { ColumnMapping, MapperOption } from '../types';
import HeaderMapperSelection from './HeaderMapperSelection';

interface Props {
  csvHeader: string;
  mappingSelectionOptions: MapperOption[];
  examples: ImporterOutputFieldType[];
  currentMapping: ColumnMapping | null;
  setMapping: (mapping: ColumnMapping | null) => void;
}

export default function HeaderMapperRow({
  mappingSelectionOptions,
  csvHeader,
  examples,
  currentMapping,
  setMapping,
}: Props) {
  const currentHeaderOption =
    currentMapping == null
      ? null
      : (mappingSelectionOptions.find(
          (option) =>
            option.value.sheetId === currentMapping.sheetId &&
            option.value.sheetColumnId === currentMapping.sheetColumnId
        ) ?? null);

  return (
    <Margin margin="20px 0">
      <Card>
        <Row>
          <Col>
            <HeaderMapperSelection
              mappingSelectionOptions={mappingSelectionOptions}
              csvHeader={csvHeader}
              examples={examples}
              currentMapping={currentHeaderOption}
              setMapping={(newMappingOption) => {
                setMapping(
                  newMappingOption == null
                    ? null
                    : { ...newMappingOption.value, csvColumnName: csvHeader }
                );
              }}
            />
          </Col>
        </Row>
      </Card>
    </Margin>
  );
}
