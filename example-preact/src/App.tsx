import { useState } from 'preact/hooks';
import Importer, { SheetState } from 'react-importer';
import 'react-importer/dist/react-importer.css';
import { ThemeVariant, ImporterTheme } from './types';

const THEME_DEFAULT: ImporterTheme = {
  colors: {
    primary: '#0369a1',
    secondary: '#0284c7',
    tertiary: '#f59e0b',
    success: '#10b981',
    danger: '#dc2626',
    warning: '#facc15',
    info: '#0ea5e9',
  },
};

const THEME_ONE: ImporterTheme = {
  colors: {
    primary: '#42a5f5',
    secondary: '#ce93d8',
    tertiary: '#93c5fd',
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

const ThemeCard = ({
  theme,
  onClick,
}: {
  theme: ImporterTheme;
  onClick: () => void;
}) => {
  return (
    <div className="theme-card" onClick={onClick}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="theme-color" style={{ backgroundColor: theme.colors.primary }}></div>
        <div className="theme-color" style={{ backgroundColor: theme.colors.secondary }}></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="theme-color" style={{ backgroundColor: theme.colors.tertiary }}  ></div>
        <div className="theme-color" style={{ backgroundColor: theme.colors.success }}></div>
        <div className="theme-color" style={{ backgroundColor: theme.colors.warning }}></div>
        <div className="theme-color" style={{ backgroundColor: theme.colors.danger }}></div>
      </div>
    </div>
  );
};
const App = () => {
  const [ready, setReady] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

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
    <div>
      <div className="container">
        <div className="header">
          <div className="main">
            <svg
              style={{ marginRight: '20px' }}
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              fill="#3498db"
              className="bi bi-file-spreadsheet"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z" />
            </svg>
            React Importer - PREACT
          </div>
          <div className="subtext">A modern CSV importer in React.</div>
        </div>

        <div className="content">
          <h1>Building a CSV uploader is hard.</h1>
          <p>
            Tired of people uploading invalid data into your application? Or
            writing custom import scripts that keep breaking?
          </p>
          <p>
            <b>React Importer</b> solves that for you.
          </p>
        </div>

        <div className="content">
          <h1>Drop in an uploader into your app in seconds.</h1>
          <div>
            <pre>
              <code className="language-jsx">{CONTENT}</code>
            </pre>
          </div>
        </div>

        <div className="content">
          <h1>
            Want to see a demo? Try uploading <a href="data.csv">this file</a>.
          </h1>
          <Importer
            theme={currentTheme as ThemeVariant}
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
                    type: 'string',
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
      </div>
      <footer>
        <div className="container">
          <p>
            <i>{"I'm so sick of building CSV importers"}</i>
          </p>
          <p>- Me</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
