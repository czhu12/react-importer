import { SheetDefinition } from '../types';
import { Tabs } from '../../components';
import { ImporterValidationError } from '../../types';
import { ExclamationCircleIcon } from '@heroicons/react/16/solid';

interface Props {
  sheetDefinitions: SheetDefinition[];
  activeSheetId: string;
  onSheetChange: (sheetId: string) => void;
  validationErrors: ImporterValidationError[];
}

export default function SheetsSwitcher({
  sheetDefinitions,
  activeSheetId,
  onSheetChange,
  validationErrors,
}: Props) {
  return (
    <Tabs
      tabs={sheetDefinitions.map((sheet) => ({
        label: sheet.label,
        value: sheet.id,
        icon: validationErrors.some((error) => error.sheetId === sheet.id) ? (
          <ExclamationCircleIcon className="mr-3 h-4 w-4" />
        ) : undefined,
      }))}
      activeTab={activeSheetId}
      onTabChange={onSheetChange}
    />
  );
}
