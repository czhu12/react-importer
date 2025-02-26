import {
  NUMBER_OF_EXAMPLES_IN_MAPPING,
  MAX_CHARACTERS_IN_MAPPING_EXAMPLES,
} from '../constants';
import {
  ColumnMapping,
  CSVParsedData,
  MapperOptionValue,
  SheetDefinition,
} from '../types';
import { fieldIsRequired } from '../validators';
import { useTranslations } from '../i18';
import { normalizeValue } from '../utils';

function removeMappingDuplicates(mappings: ColumnMapping[]): ColumnMapping[] {
  const uniqueMap = new Map<string, ColumnMapping>();

  mappings.forEach((entry) => {
    if (!uniqueMap.has(entry.csvColumnName)) {
      uniqueMap.set(entry.csvColumnName, entry);
    }
  });

  return Array.from(uniqueMap.values());
}

function buildSheetSuggestedHeaderMappings(
  sheet: SheetDefinition,
  csvHeaders: string[]
): ColumnMapping[] {
  const mappings: ColumnMapping[] = [];

  csvHeaders.forEach((header) => {
    const foundField = sheet.columns.find((column) => {
      if (column.type === 'reference') {
        // Reference columns are filled automatically so they shouldn't be mapped by hand
        return false;
      }

      const keywords = [
        column.id,
        ...(column.suggestedMappingKeywords || []),
      ].map((k) => normalizeValue(k));

      const normalizedHeader = normalizeValue(header);

      return keywords.includes(normalizedHeader);
    });

    if (!foundField) {
      return;
    }

    mappings.push({
      csvColumnName: header,
      sheetId: sheet.id,
      sheetColumnId: foundField.id,
    });
  });

  return mappings;
}

export const buildSuggestedHeaderMappings = (
  sheetDefinitions: SheetDefinition[],
  csvHeaders: string[]
) => {
  const headerMappings: ColumnMapping[] = [];

  sheetDefinitions.forEach((sheet) => {
    const mappings = buildSheetSuggestedHeaderMappings(sheet, csvHeaders);
    headerMappings.push(...mappings);
  });

  return removeMappingDuplicates(headerMappings);
};

export function calculateNewMappingsForCsvColumnMapingChanged(
  currentMapping: ColumnMapping[],
  csvColumnName: string,
  newCsvColumnMaping: MapperOptionValue | null
): ColumnMapping[] {
  if (newCsvColumnMaping == null) {
    return currentMapping.filter((m) => m.csvColumnName !== csvColumnName);
  }

  // Make sure we don't allow dupplicate mappings for the same sheet column
  const mappingsForOtherSheets = currentMapping.filter(
    (m) =>
      (m.sheetId !== newCsvColumnMaping.sheetId ||
        m.sheetColumnId !== newCsvColumnMaping.sheetColumnId) &&
      m.csvColumnName !== csvColumnName
  );

  return [...mappingsForOtherSheets, { ...newCsvColumnMaping, csvColumnName }];
}

export function calculateMappingExamples(
  data: CSVParsedData[],
  csvColumnName: string
) {
  const examples = getFilteredExamples(data, csvColumnName);

  const paddedExamples = padExamples(examples);

  return trimExamplesByCharacterLimit(paddedExamples);
}

function getFilteredExamples(data: CSVParsedData[], csvColumnName: string) {
  return data
    .map((d) => d[csvColumnName])
    .filter((v) => v != null && v.trim() !== '')
    .slice(0, NUMBER_OF_EXAMPLES_IN_MAPPING);
}

function padExamples(examples: string[]) {
  const paddedExamples = [
    ...examples,
    ...Array(NUMBER_OF_EXAMPLES_IN_MAPPING - examples.length).fill(''),
  ];
  return paddedExamples;
}

function trimExamplesByCharacterLimit(examples: string[]) {
  const trimmedExamples = [...examples];
  let totalCharacters = trimmedExamples.reduce(
    (acc, curr) => acc + curr.length,
    0
  );

  while (
    totalCharacters > MAX_CHARACTERS_IN_MAPPING_EXAMPLES &&
    trimmedExamples.length > 1
  ) {
    trimmedExamples.pop();
    totalCharacters = trimmedExamples.reduce(
      (acc, curr) => acc + curr.length,
      0
    );
  }

  return trimmedExamples;
}

export function useMappingAvailableSelectOptions(
  sheetDefinitions: SheetDefinition[],
  currentMapping: ColumnMapping[]
) {
  const { t } = useTranslations();

  const options = sheetDefinitions.flatMap((sheetDefinition) =>
    sheetDefinition.columns
      .filter((column) => column.type !== 'reference') // Reference columns would be mapped automatically
      .map((column) => ({
        label: `${column.label}${fieldIsRequired(column) ? ' *' : ''}`,
        value: {
          sheetId: sheetDefinition.id,
          sheetColumnId: column.id,
        },
        group: currentMapping.some(
          (mapping) =>
            mapping.sheetId === sheetDefinition.id &&
            mapping.sheetColumnId === column.id
        )
          ? t('mapper.used')
          : t('mapper.unused'),
      }))
  );

  return options.sort((a, b) => sortByGroupAndLabel(a, b, t('mapper.unused')));
}

function sortByGroupAndLabel(
  a: { label: string; group: string },
  b: { label: string; group: string },
  unused: string
) {
  if (a.group === unused && b.group !== unused) {
    return -1;
  }
  if (a.group !== unused && b.group === unused) {
    return 1;
  }

  return a.label.localeCompare(b.label);
}

export function areAllRequiredMappingsSet(
  sheetDefinitions: SheetDefinition[],
  mappings: ColumnMapping[]
) {
  for (const sheet of sheetDefinitions) {
    for (const column of sheet.columns) {
      // Reference columns are filled automatically so they shouldn't be required to map by hand
      if (fieldIsRequired(column) && column.type !== 'reference') {
        const mapping = mappings.find(
          (m) => m.sheetId === sheet.id && m.sheetColumnId === column.id
        );

        if (mapping == null) {
          return false;
        }
      }
    }
  }

  return true;
}
