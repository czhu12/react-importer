import { useState } from 'preact/hooks';
import Importer, { SheetState, ThemeVariant } from 'react-importer';
import 'react-importer/dist/react-importer.css';
import ThemeCard from './components/ThemeCard';
import Header from './components/Header';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import { ImporterTheme } from './types';

const THEME_DEFAULT: ImporterTheme = {
  colors: {
    primary: '#4f39f6',
    secondary: '#0284c7',
    tertiary: '#d1d5dc',
    success: '#10b981',
    danger: '#f44336',
    warning: '#facc15',
    info: '#0ea5e9',
  },
};

const THEME_ONE: ImporterTheme = {
  colors: {
    primary: '#42a5f5',
    secondary: '#ce93d8',
    tertiary: '#d1d5dc',
    success: '#66bb6a',
    danger: '#f44336',
    warning: '#ffa726',
    info: '#29b6f6',
  },
};

const THEME_TWO: ImporterTheme = {
  colors: {
    primary: '#475569',
    secondary: '#94a3b8',
    tertiary: '#cbd5e1',
    success: '#3f6212',
    danger: '#b91c1c',
    warning: '#ca8a04',
    info: '#0369a1',
  },
};

const CONTENT = `import Importer from 'react-importer'

<Importer
  fields={[
    {
      label: "Name", key: "name", validators: [
        { validate: "required" },
      ]
    },
    {
      label: "Email", key: "email", validators: [
        { validate: "required" },
        { validate: "unique", error: "This email is not unique" },
      ]
    },
    {
      label: "State", key: "state", transformers: [
        { transformer: "state_code" }
      ]
    },
  ]}
  onComplete={(data) => {
    console.log(data)
  }}
/>`;

const App = () => {
  hljs.registerLanguage('javascript', javascript);
  const [ready, setReady] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>('default');

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
      <div>
        <Header />

        <div className="content">
          <h3 className="text-4xl rubik font-bold">Building a CSV uploader is hard.</h3>
          <p>
            OneImport is a javascript library that makes it easy to drop in a powerful,
            intuitive, and elegant CSV uploader. It's just 35kb gzipped, and works with any
            javascript application.
          </p>
        </div>

        <div className="content">
          <h3 className="text-4xl rubik font-bold">Drop in an uploader into your app in seconds.</h3>
          <div>
            <pre className="bg-slate-800 text-white rounded-lg p-4">
              <code className="language-javascript" dangerouslySetInnerHTML={{ __html: hljs.highlight(CONTENT, { language: 'jsx' }).value }} />
            </pre>
          </div>
        </div>

        <div className="content">
          <h1>
            Want to see a demo? Try uploading <a className="text-blue-500 hover:text-blue-600" href="/data.csv">this file</a>.
          </h1>
          <Importer
            theme={currentTheme}
            sheets={[
              {
                id: 'sheet_1',
                label: 'Sheet 1',
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
                      sheetId: 'sheet_1',
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
        <div className="content">
          <h1>Feel free to customize the theme</h1>
          <div className="theme-wrapper">
            <ThemeCard
              theme={THEME_DEFAULT}
              onClick={() => setCurrentTheme('default')}
            />
            <ThemeCard
              theme={THEME_ONE}
              onClick={() => setCurrentTheme('theme-1')}
            />
            <ThemeCard
              theme={THEME_TWO}
              onClick={() => setCurrentTheme('theme-2')}
            />
          </div>
        </div>
        <footer>
          <div className="container">
            TODO
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
