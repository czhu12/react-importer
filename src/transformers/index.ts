import {
  ImporterOutputFieldType,
  SheetColumnDefinition,
  SheetDefinition,
  SheetRow,
  SheetState,
} from '../types';
import { eachWithObject, hasData } from '../utils/functional';
import { Transformer } from './transformer_definitions/base';

function transformSheet(
  sheetDefinition: SheetDefinition,
  sheetData: SheetState
) {
  const sheetRows: SheetRow[] = [];

  const pipelineByColumnId = eachWithObject<SheetColumnDefinition, Pipeline>(
    sheetDefinition.columns,
    (columnDefinition, obj) => {
      obj[columnDefinition.id] = new Pipeline();
      if (!columnDefinition.transformers) return;
      columnDefinition.transformers.forEach((transformerDefinition) => {
        obj[columnDefinition.id].push(
          Transformer.buildFromDefinition(transformerDefinition)
        );
      });
    }
  );

  sheetDefinition.columns.forEach((columnDefinition) => {
    const columnId = columnDefinition.id;
    const pipeline = pipelineByColumnId[columnId];

    sheetData.rows.forEach((row) => {
      if (!hasData(row)) {
        return;
      }
      if (!(columnId in row)) {
        return;
      }

      row[columnId] = pipeline.transform(row[columnId]);
    });
  });

  return sheetRows;
}

export function applyTransformations(
  sheetDefinitions: SheetDefinition[],
  sheetStates: SheetState[]
) {
  const newSheetStates: SheetState[] = [];

  sheetDefinitions.forEach((sheetDefinition) => {
    const sheetData = sheetStates.find(
      (state) => state.sheetId === sheetDefinition.id
    );

    if (sheetData) {
      const newRows = transformSheet(sheetDefinition, sheetData);

      newSheetStates.push({ sheetId: sheetDefinition.id, rows: newRows });
    }
  });

  return newSheetStates;
}

class Pipeline {
  steps: Transformer[];

  // Series of transformations
  constructor(steps = []) {
    this.steps = steps;
  }

  push(step: Transformer) {
    this.steps.push(step);
  }

  transform(value: ImporterOutputFieldType) {
    let current = value;
    this.steps.forEach((step) => {
      current = step.transform(current);
    });
    return current;
  }
}
