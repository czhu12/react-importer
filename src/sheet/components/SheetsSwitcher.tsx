import { SheetDefinition } from '../types';
import Tabs from '../../components/Tabs';

interface Props {
  sheetDefinitions: SheetDefinition[];
  activeSheetId: string;
  onSheetChange: (sheetId: string) => void;
}

export default function SheetsSwitcher({
  sheetDefinitions,
  activeSheetId,
  onSheetChange,
}: Props) {
  return (
    <Tabs
      tabs={sheetDefinitions.map((sheet) => ({
        label: sheet.label,
        value: sheet.id,
      }))}
      activeTab={activeSheetId}
      onTabChange={onSheetChange}
    />
  );
}
