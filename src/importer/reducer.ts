import { formatData, buildSuggestedHeaderMappings } from '../utils';
import {
  applyValidation,
  computeStatistics,
  ValidationResult,
} from '../validators';
import { applyTransformations } from '../transformers';
import {
  ImporterAction,
  ImporterField,
  ImporterFormattedData,
  ImporterHeaderMappings,
  ImporterState,
} from '../types';

const computeMetadata = (
  formattedData: ImporterFormattedData[],
  fields: ImporterField[],
  headerMappings: ImporterHeaderMappings
) => {
  const newValidationResult = applyValidation(formattedData, fields);
  const newStatistics = computeStatistics(
    formattedData,
    headerMappings,
    newValidationResult
  );
  return {
    validationResult: newValidationResult,
    statistics: newStatistics,
  };
};

function buildInitialState(fields: ImporterField[]): ImporterState {
  return {
    fields,
    currentStep: 0,
    parsed: null,
    pending: true,
    progress: 0,
    failed: false,
    formattedData: [],
    statistics: {
      statisticsByFieldKey: {},
      total: null,
    },
    headerMappings: {},
    validationResult: new ValidationResult(),
  };
}

const reducer = (
  state: ImporterState,
  action: ImporterAction
): ImporterState => {
  switch (action.type) {
    case 'RESTART':
      return buildInitialState(state.fields);
    case 'DECREMENT_STEP':
      return { ...state, currentStep: state.currentStep - 1 };
    case 'COMPLETED_MAPPINGS': {
      const transformedFormattedData = applyTransformations(
        state.formattedData,
        state.fields
      );
      return {
        ...state,
        formattedData: transformedFormattedData,
        currentStep: state.currentStep + 1,
      };
    }
    case 'SET_CURRENT_STEP': {
      const currentStep = action.payload.currentStep;
      return {
        ...state,
        currentStep,
      };
    }
    case 'FILE_PARSED': {
      const automaticHeaderMappings = buildSuggestedHeaderMappings(
        state.fields,
        action.payload.parsed.data[0]
      );
      const formattedData = formatData(
        automaticHeaderMappings,
        action.payload.parsed.data
      );
      return {
        ...state,
        ...computeMetadata(
          formattedData,
          state.fields,
          automaticHeaderMappings
        ),
        parsed: action.payload.parsed,
        headerMappings: automaticHeaderMappings,
        formattedData,
        currentStep: 1,
      };
    }
    case 'HEADER_MAPPINGS_CHANGED': {
      const newFormattedData = formatData(
        action.payload.headerMappings,
        state.parsed!.data
      );
      return {
        ...state,
        ...computeMetadata(
          newFormattedData,
          state.fields,
          action.payload.headerMappings
        ),
        headerMappings: action.payload.headerMappings,
        formattedData: newFormattedData,
      };
    }
    case 'CELL_CHANGED': {
      const copy = [...state.formattedData];
      copy[action.payload.index] = action.payload.row;
      return {
        ...state,
        ...computeMetadata(copy, state.fields, state.headerMappings),
        formattedData: copy,
      };
    }
    case 'PROGRESS':
      return { ...state, progress: action.payload.progress };
    case 'PENDING':
      return { ...state, currentStep: 3, pending: true, progress: 0 };
    case 'COMPLETE':
      return { ...state, currentStep: 3, pending: false, progress: 100 };
    case 'FAILED':
      return { ...state, currentStep: 3, failed: true };
    default:
      return state;
  }
};

export { reducer, buildInitialState };
