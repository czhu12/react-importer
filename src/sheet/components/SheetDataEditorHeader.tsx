import { useTranslations } from '../../i18';
import { fieldIsRequired } from '../../validators';
import { SheetColumnDefinition } from '../types';
import { PencilIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
  column: SheetColumnDefinition;
}

export default function SheetDataEditorHeader({ column }: Props) {
  const { t } = useTranslations();

  return (
    <div
      className="flex items-center"
      title={column.isReadOnly ? t('sheet.readOnly') : undefined}
    >
      {column.isReadOnly && (
        <div className="relative mr-3 h-5 w-5">
          <XMarkIcon className="absolute top-0 left-0 h-5 w-5 text-gray-400" />

          <PencilIcon className="absolute top-0 left-0 h-5 w-5 text-gray-500" />
        </div>
      )}
      {column.label} {fieldIsRequired(column) && '*'}
    </div>
  );
}
