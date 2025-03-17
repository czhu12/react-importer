export type ImporterRequirementType = {
  columnId: string;
  columnLabel: string;
  importerInformation?: string;
};

export type ImporterRequirementsType = {
  required: ImporterRequirementType[];
  optional: ImporterRequirementType[];
};
