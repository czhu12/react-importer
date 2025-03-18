export type ImporterRequirementType = {
  sheetId: string;
  columnId: string;
  columnLabel: string;
};

export type ImporterRequirementsType = {
  required: ImporterRequirementType[];
  optional: ImporterRequirementType[];
};
