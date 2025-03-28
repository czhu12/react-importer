import { useState } from 'preact/hooks';
import Importer, {
  SheetDefinition,
  SheetRow,
  ImporterState,
} from 'hello-csv/peer';
import example2 from '../../assets/datasets/example-2.csv?url';

const COMPANY_SHEET: SheetDefinition = {
  id: 'companies',
  label: 'Companies',
  columns: [
    {
      label: 'Company Name',
      id: 'company',
      type: 'string',
      validators: [{ validate: 'required' }],
    },
    {
      label: 'Industry',
      id: 'industry',
      type: 'enum',
      typeArguments: {
        values: [
          { label: 'Healthcare', value: 'healthcare' },
          { label: 'Construction', value: 'construction' },
          { label: 'Environmental Services', value: 'environmental_services' },
          { label: 'Education', value: 'education' },
          { label: 'Technology', value: 'technology' },
          { label: 'Finance', value: 'finance' },
        ],
      },
      validators: [{ validate: 'required' }],
    },
  ],
};

const EMPLOYEE_SHEET: SheetDefinition = {
  id: 'employees',
  label: 'Employees',
  columns: [
    {
      label: 'Employee ID',
      id: 'employee_id',
      type: 'string',
      validators: [
        { validate: 'required' },
        { validate: 'unique', error: 'This employee ID is not unique' },
      ],
    },
    {
      label: 'Email',
      id: 'email',
      type: 'string',
      validators: [
        { validate: 'required' },
        { validate: 'unique', error: 'This email is not unique' },
        {
          validate: 'regex_matches',
          regex:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          error: 'This email is not valid',
        },
      ],
    },
    {
      label: 'Phone Number',
      id: 'phone',
      type: 'string',
      validators: [{ validate: 'required' }],
    },
    { label: 'City', id: 'city', type: 'string' },
    {
      label: 'State',
      id: 'state',
      type: 'string',
      isReadOnly: true,
      transformers: [{ transformer: 'state_code' }],
    },
    {
      label: 'Company - Name',
      id: 'company',
      type: 'reference',
      typeArguments: {
        sheetId: 'companies',
        sheetColumnId: 'company',
      },
      validators: [{ validate: 'required' }],
    },
  ],
};

export default function StudentsImporter() {
  const [ready, setReady] = useState(false);

  const onComplete = async (
    data: ImporterState,
    onProgress: (progress: number) => void
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    onProgress(20);
    await new Promise((resolve) => setTimeout(resolve, 200));
    onProgress(50);
    await new Promise((resolve) => setTimeout(resolve, 200));
    onProgress(100);
    console.log(data);
    setReady(true);
  };

  return (
    <div className="content">
      <h1>
        Want to see a demo? Try uploading{' '}
        <a className="text-blue-500 hover:text-blue-600" href={example2}>
          this file
        </a>
        .
      </h1>
      <div className="mt-4 flex h-[800px] rounded-lg border border-gray-200 bg-white p-6 px-8">
        <Importer
          sheets={[EMPLOYEE_SHEET, COMPANY_SHEET]}
          onDataColumnsMapped={(sheets) => {
            const sheet = sheets.find(
              (sheet) => sheet.sheetId === 'companies'
            )!;
            const seen = new Set();
            sheet.rows = [...sheet.rows].filter((row: SheetRow) => {
              // Remove duplicate names, don't validate yet...
              const hasSeen = !seen.has(row.company);
              seen.add(row.company);
              return hasSeen;
            });
            return sheets;
          }}
          onComplete={onComplete}
        />
      </div>
      {ready && (
        <div>
          <h4>Check the console for the output!</h4>
        </div>
      )}
    </div>
  );
}
