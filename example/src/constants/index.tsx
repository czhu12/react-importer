export const EXAMPLE_CODE = `import Importer from 'hello-csv/peer'
import 'hello-csv/peer/index.css'

<Importer
  theme="default"
  language="en"
  sheets={[
      {
      id: 'employees',
      label: 'Employees',
      columns: [
        {
          label: 'Name',
          id: 'name',
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
      ],
    }
  ]}
  onComplete={onComplete}
/>
`;
