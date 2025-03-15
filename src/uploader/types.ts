export type ImporterRequirementType = {
  sheetId: string;
  columnId: string;
  columnLabel: string;
  requirementInformation?: string;
};

export type ImporterRequirementsType = {
  required: ImporterRequirementType[];
  optional: ImporterRequirementType[];
};
