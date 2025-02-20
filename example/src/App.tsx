import { useState } from 'preact/hooks';
import Importer, { SheetState } from 'react-importer';
import 'react-importer/dist/react-importer.css';
import Header from './components/Header';
import CodeBlock from './components/CodeBlock';
import Footer from './components/Footer';
import { EXAMPLE_CODE } from './constants';

const App = () => {
  const [ready, setReady] = useState(false);

  const onComplete = async (
    data: SheetState[],
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
    <div className="min-h-screen w-full">
      <Header />

      <div className="mb-16">
        <div className="content">
          <h3 className="rubik text-4xl font-bold">
            Building a CSV uploader is hard
          </h3>
          <p>
            OneImport is a javascript library that makes it easy to drop in a
            powerful, intuitive, and elegant CSV uploader. It's just ~130KB
            gzipped, and works with any javascript application.
          </p>
        </div>

        <div className="content">
          <CodeBlock
            title="Drop in an uploader into your app in seconds"
            code={EXAMPLE_CODE}
          />
        </div>

        <div className="content">
          <h1>
            Want to see a demo? Try uploading{' '}
            <a className="text-blue-500 hover:text-blue-600" href="/data.csv">
              this file
            </a>
            .
          </h1>
          <Importer
            theme="default"
            locale="en"
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
              },
              {
                id: 'companies',
                label: 'Companies',
                columns: [
                  {
                    label: 'Company',
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
                        { label: 'Tech', value: 'tech' },
                        { label: 'Finance', value: 'finance' },
                      ],
                    },
                    validators: [{ validate: 'required' }],
                  },
                  {
                    label: 'Name',
                    id: 'name',
                    type: 'reference',
                    typeArguments: {
                      sheetId: 'employees',
                      sheetColumnId: 'name',
                    },
                    validators: [{ validate: 'required' }],
                  },
                ],
              },
            ]}
            onComplete={onComplete}
          />
          {ready && (
            <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
              <h4>Check the console for the output!</h4>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
