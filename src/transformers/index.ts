import {
  CustomTransformerDefinition,
  ImporterField,
  ImporterFormattedData,
  ImporterOutputFieldType,
  ImporterTransformerDefinitionBase,
  ImporterTransformerType,
} from '../types';
import { eachWithObject, has, hasData } from '../utils/functional';
import { STATE_TO_CODES } from './utils';

export const applyTransformations = (
  formattedData: ImporterFormattedData[],
  fields: ImporterField[]
) => {
  const newData = [...formattedData];
  const pipelineByFieldKey = eachWithObject<ImporterField, Pipeline>(
    fields,
    (field, obj) => {
      obj[field.key] = new Pipeline();
      if (!field.transformers) return;
      field.transformers.forEach((transformerDefinition) => {
        obj[field.key].push(
          Transformer.buildFromDefinition(transformerDefinition)
        );
      });
    }
  );

  fields.forEach((field) => {
    const pipeline = pipelineByFieldKey[field.key];
    newData.forEach((row) => {
      if (!hasData(row)) {
        return;
      }
      if (!(field.key in row)) {
        return;
      }

      row[field.key] = pipeline.transform(row[field.key]);
    });
  });

  return newData;
};

export class Pipeline {
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

export class Transformer {
  definition: ImporterTransformerDefinitionBase;

  constructor(definition: ImporterTransformerDefinitionBase) {
    this.definition = definition;
  }

  static buildFromDefinition(definition: ImporterTransformerDefinitionBase) {
    const mapping: {
      [key in ImporterTransformerType]: typeof Transformer;
    } = {
      phone_number: PhoneNumberTransformer,
      postal_code: PostalCodeTransformer,
      state_code: StateCodeTransformer,
      strip: StripTransformer,
      custom: CustomTransformer,
    };
    if (!(definition.transformer in mapping)) {
      throw new Error(
        `Missing transformer for ${
          definition.transformer
        }. Valid transformer options are ${Object.keys(mapping).join(', ')}`
      );
    }
    const FoundValidator = mapping[definition.transformer];
    return new FoundValidator(definition);
  }

  transform(value: ImporterOutputFieldType): ImporterOutputFieldType {
    const newValue = this.parse(value);
    if (newValue) return newValue;
    return value;
  }

  parse(_value: ImporterOutputFieldType): ImporterOutputFieldType | undefined {
    throw new Error('Not Implemented');
  }
}

export class StripTransformer extends Transformer {
  parse(value: ImporterOutputFieldType): ImporterOutputFieldType {
    return value.trim();
  }
}

export class CustomTransformer extends Transformer {
  key: string;

  parse: (value: ImporterOutputFieldType) => ImporterOutputFieldType;

  constructor(definition: CustomTransformerDefinition) {
    super(definition);
    const { key, transformFn } = definition;
    this.key = key;
    this.parse = transformFn;
  }
}

export class PhoneNumberTransformer extends Transformer {
  parse(value: ImporterOutputFieldType): ImporterOutputFieldType | undefined {
    return value.replace(/[^0-9]/g, '');
  }
}

export class StateCodeTransformer extends Transformer {
  parse(value: ImporterOutputFieldType): ImporterOutputFieldType | undefined {
    const states = STATE_TO_CODES.map((s2c) => s2c[0].toLowerCase());
    if (has(states, value.toLowerCase())) {
      const index = states.indexOf(value.toLowerCase());
      return STATE_TO_CODES[index][1];
    }
  }
}

export class PostalCodeTransformer extends Transformer {
  parse(value: ImporterOutputFieldType): ImporterOutputFieldType | undefined {
    if (has(value, '-')) {
      return value.split('-')[0];
    }
  }
}
