import { ImporterRequirementsType } from '../types';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Tooltip } from '../../components/index';
interface Props {
  importerRequirements: ImporterRequirementsType;
}

const RequirementInfo = ({
  importerRequirements,
}: {
  importerRequirements: ImporterRequirementsType;
}) => (
  <div className="h-full w-full space-y-5 overflow-y-auto">
    {Object.entries(importerRequirements).map(([groupName, requirements]) => (
      <div key={groupName}>
        <div className="my-2 text-sm font-light uppercase">
          {groupName} Columns
        </div>
        <div className="my-2">
          {requirements.map((requirement) => (
            <div
              key={requirement.columnId}
              className="my-2.5 flex justify-between"
            >
              <div className="text-xs font-medium">
                {requirement.columnLabel}
              </div>
              <div className="me-3 text-xs font-light">
                {/* TODO: Fix tooltip since it goes behind the column next to it */}
                <Tooltip
                  tooltipText={
                    requirement?.requirementInformation ||
                    `This column is ${groupName}`
                  }
                >
                  <InformationCircleIcon className="size-6 text-gray-400" />
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default function ImporterRequirements({ importerRequirements }: Props) {
  return (
    <div className="flex h-full flex-col space-y-5">
      <div>Info box that is customizable</div>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <RequirementInfo importerRequirements={importerRequirements} />
      </div>
    </div>
  );
}
