import { SheetDefinition } from '../types';

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
    <div className="flex">
      {sheetDefinitions.map((sheet, index) => (
        <div key={sheet.id}>
          <button
            onClick={() => onSheetChange(sheet.id)}
            className={activeSheetId === sheet.id ? 'underline' : ''}
          >
            {sheet.label}
          </button>

          {index !== sheetDefinitions.length - 1 && (
            <span className="mx-3"> | </span>
          )}
        </div>
      ))}
    </div>
  );
}
