export const EXAMPLE_CODE = `import Importer from 'react-importer'

<Importer
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
          id: 'phone_number',
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
  onComplete={(data) => {
    console.log(data)
  }}
/>
`;
