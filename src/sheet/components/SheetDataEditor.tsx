import { useEffect, useMemo, useState } from 'preact/compat';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { SheetDefinition, SheetState, SheetRow } from '../types';
import {
  CellChangedPayload,
  ImporterOutputFieldType,
  ImporterValidationError,
  RemoveRowsPayload,
} from '../../types';
import { Checkbox, ConfirmationModal } from '../../components';
import SheetDataEditorTable from './SheetDataEditorTable';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '../../i18';
import SheetDataEditorHeader from './SheetDataEditorHeader';

const columnHelper = createColumnHelper<SheetRow>();

interface Props {
  sheetDefinition: SheetDefinition;
  data: SheetState;
  allData: SheetState[];
  sheetValidationErrors: ImporterValidationError[];
  setRowData: (payload: CellChangedPayload) => void;
  removeRows: (payload: RemoveRowsPayload) => void;
}

export default function SheetDataEditor({
  sheetDefinition,
  data,
  allData,
  sheetValidationErrors,
  setRowData,
  removeRows,
}: Props) {
  const { t } = useTranslations();

  const [selectedRows, setSelectedRows] = useState<SheetRow[]>([]);
  const [onlyShowErrors, setOnlyShowErrors] = useState(false);
  const [removeConfirmationModalOpen, setRemoveConfirmationModalOpen] =
    useState(false);

  useEffect(() => {
    setSelectedRows([]); // On changing sheets
  }, [sheetDefinition]);

  const rowData = useMemo(
    () =>
      data.rows.filter(
        (_, index) =>
          !onlyShowErrors ||
          sheetValidationErrors.some((error) => error.rowIndex === index)
      ),
    [data, onlyShowErrors, sheetValidationErrors]
  );

  const columns = useMemo(
    () =>
      sheetDefinition.columns.map((column) =>
        columnHelper.accessor(column.id, {
          header: () => <SheetDataEditorHeader column={column} />,
        })
      ),
    [sheetDefinition]
  );

  const table = useReactTable<SheetRow>({
    data: rowData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  function onRemoveRows() {
    removeRows({ rows: selectedRows, sheetId: sheetDefinition.id });
    setSelectedRows([]);
  }

  function onCellValueChanged(
    rowIndex: number,
    columnId: string,
    value: ImporterOutputFieldType
  ) {
    const rowValue = { ...data.rows[rowIndex] };
    rowValue[columnId] = value;

    setRowData({
      sheetId: sheetDefinition.id,
      value: rowValue,
      rowIndex,
    });
  }

  return (
    <div>
      <div className="my-5 flex items-center">
        <div>
          <Checkbox
            id={`Only show errors checkbox for ${sheetDefinition.id}`}
            checked={onlyShowErrors}
            setChecked={(checked) => {
              setSelectedRows([]);
              setOnlyShowErrors(checked);
            }}
            label={t('sheet.onlyShowErrorsCheckboxLabel')}
          />
        </div>

        {selectedRows.length > 0 && (
          <TrashIcon
            className="ml-16 h-6 w-6 cursor-pointer"
            onClick={() => setRemoveConfirmationModalOpen(true)}
          />
        )}
      </div>

      <SheetDataEditorTable
        table={table}
        sheetDefinition={sheetDefinition}
        data={data}
        allData={allData}
        sheetValidationErrors={sheetValidationErrors}
        onCellValueChanged={onCellValueChanged}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />

      <ConfirmationModal
        open={removeConfirmationModalOpen}
        setOpen={setRemoveConfirmationModalOpen}
        onConfirm={onRemoveRows}
        title={t('sheet.removeConfirmationModalTitle')}
        confirmationText={t('sheet.removeConfirmationModalConfirmationText')}
        subTitle={t('sheet.removeConfirmationModalSubTitle', {
          rowsCount: selectedRows.length,
        })}
        variant="danger"
      />
    </div>
  );
}
