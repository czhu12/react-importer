# react-importer

> A modern CSV importer written in React

# TODOS

- Notify progress & notify errors on import
- React - we can use this in connect
-

[![NPM](https://img.shields.io/npm/v/react-importer.svg)](https://www.npmjs.com/package/react-importer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://github.com/czhu12/react-importer/actions/workflows/ci.yml/badge.svg)](https://github.com/czhu12/react-importer/actions/workflows/ci.yml) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![Demo](https://github.com/czhu12/react-importer/raw/master/example/public/demo.gif)

# Contents

- [Why?](#why)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Roadmap](#roadmap)

### Why?

Every single project I've worked on needed some hacked together CSV importer. React Importer tries to fix this by implementing a modern CSV import flow for React projects!

### Demo

Visit [here](https://czhu12.github.io/react-importer/) to see what React Importer looks like in action!

### Installation

```bash
npm install --save react-importer
```

#### React and [Vite](https://vite.dev/)

- Since this project uses [Preact](https://preactjs.com/), it is necesary to add the following code to your `vite.config.ts` to ensure compatibility if your project relies on React

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
});
```

### Usage

```jsx
import Importer from 'react-importer';

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
  onComplete={(data) => {
    console.log(data);
  }}
/>;
```

### Documentation

(TODO)

### Roadmap

- Make readme and documentation better
- Support existing data
- Add support for callbacks
- Add support for themeing
- Animated progress bar

## License

MIT © [czhu12](https://github.com/czhu12)

## Development setup

- Run `npm i && npm run watch` - this watches for changes in main plugin and rebuilds if needed
- Run `cd example-preact && npm i && npm run dev` - this runs example application
