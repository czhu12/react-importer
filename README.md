# react-importer

> A modern CSV importer written in React

# TODOS

- Notify progress & notify errors on import
- React - we can use this in connect

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
- Detailed documenation on aliasing React to Preact can be found [here](https://preactjs.com/guide/v10/getting-started/#aliasing-react-to-preact)

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

#### Custom Themes

We currently support three themes: `default`, `theme-1`, and `theme-2`. You can apply a theme by passing the theme prop to the Importer component:

```jsx
<Importer theme="theme-1" />
```

##### Customization

You can further customize theme styles by overriding the following CSS variables in your `index.css` file:

```css
:root {
  --csv-importer-color-primary: #007bff;
  --csv-importer-color-primary-light: #66b3ff;
  --csv-importer-color-primary-extra-light: #cce7ff;
  --csv-importer-color-secondary: #6c757d;
  --csv-importer-color-tertiary: #17a2b8;
  --csv-importer-color-tertiary-light: #5bc0de;
  --csv-importer-color-success: #28a745;
  --csv-importer-color-danger: #dc3545;
  --csv-importer-color-danger-light: #f5c6cb;
  --csv-importer-color-danger-extra-light: #f8d7da;
  --csv-importer-color-warning: #ffc107;
  --csv-importer-color-info: #17a2b8;
}
```

These variables allow you to adjust the color scheme for primary, secondary, and tertiary elements, as well as status indicators such as success, danger, warning, and info.

#### Locales

In order to change locale simply pass it to the Importer. Currently supported locales are

- en - English (the default one)
- fr - French

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
- Run `cd example && npm i && npm run dev` - this runs example application
