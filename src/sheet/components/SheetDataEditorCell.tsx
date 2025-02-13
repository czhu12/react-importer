import { useEffect, useRef, useState } from 'preact/hooks';
import { ImporterOutputFieldType } from '../../types';

interface Props {
  value: ImporterOutputFieldType;
  onUpdated: (value: ImporterOutputFieldType) => void;
}

export default function SheetDataEditorCell({ value, onUpdated }: Props) {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const valueEmpty = value == null || value.trim() === '';
  // Use non-breaking space to keep the cell height
  const nonEmptyValue = valueEmpty ? '\u00A0' : value;

  if (!editMode) {
    return (
      <div
        onClick={(e) => e.detail > 1 && setEditMode(true)}
        className="w-full h-full"
      >
        {nonEmptyValue}
      </div>
    );
  }

  function updateValue(value: string) {
    setEditMode(false);
    onUpdated(value ?? '');
  }

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      onBlur={(e) => updateValue((e.target as HTMLInputElement)?.value ?? '')}
    />
  );
}
