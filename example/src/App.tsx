import { useState } from 'preact/hooks';
import Importer, { SheetState, ThemeVariant } from 'react-importer';
import 'react-importer/dist/react-importer.css';
import ThemeCard from './components/ThemeCard';
import Header from './components/Header';
import CodeBlock from './components/CodeBlock';
import { ImporterTheme } from './types';

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
import { EXAMPLE_CODE } from './constants';

const App = () => {
  const [ready, setReady] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>('default');
  const [currentLocale, setCurrentLocale] = useState('en');

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
          <h3 className="rubik text-4xl font-bold">
            Building a CSV uploader is hard.
          </h3>
          <p>
            OneImport is a javascript library that makes it easy to drop in a
            powerful, intuitive, and elegant CSV uploader. It's just 35kb
            gzipped, and works with any javascript application.
          </p>
        </div>

        <div className="content">
          <CodeBlock
            title="Drop in an uploader into your app in seconds."
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
            theme={currentTheme}
            locale={currentLocale}
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

        <div className="content">
          <h1>Feel free to customize the language</h1>
          <div className="flex">
            <div
              className="grow rounded-lg bg-[#f4f4f4] p-8 text-center shadow-lg"
              onClick={() => setCurrentLocale('en')}
            >
              English
            </div>
            <div className="w-24" />
            <div
              className="grow rounded-lg bg-[#f4f4f4] p-8 text-center shadow-lg"
              onClick={() => setCurrentLocale('fr')}
            >
              French
            </div>
          </div>
        </div>
        <footer>
          <div className="container">TODO</div>
        </footer>
      </div>
    </div>
  );
};

export default App;
