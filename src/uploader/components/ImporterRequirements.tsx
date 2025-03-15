import { ImporterRequirementsType } from '../types';

interface Props {
  importerRequirements: ImporterRequirementsType;
}

export default function ImporterRequirements({ importerRequirements }: Props) {
  const { required, optional } = importerRequirements;

  return (
    <div className="flex flex-col space-y-5">
      <div>Info box that is customizable</div>
      <div className="text-sm font-light uppercase">Required columns</div>
      {required.map((requirement) => (
        <div key={requirement.columnId}>{requirement.columnLabel}</div>
      ))}
      <div className="text-sm font-light uppercase">Optional columns</div>
      {optional.map((requirement) => (
        <div key={requirement.columnId}>{requirement.columnLabel}</div>
      ))}
    </div>
  );
}
