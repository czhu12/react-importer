# react-importer

# TODOS
* Notify progress & notify errors on import
* React - we can use this in connect
* 

[![NPM](https://img.shields.io/npm/v/react-importer.svg)](https://www.npmjs.com/package/react-importer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://github.com/czhu12/react-importer/actions/workflows/ci.yml/badge.svg)](https://github.com/czhu12/react-importer/actions/workflows/ci.yml) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![Demo](https://github.com/czhu12/react-importer/raw/master/example/public/demo.gif)

Contents
========
 * [Why?](#why)
 * [Demo](#demo)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Documentation](#documentation)
 * [Roadmap](#roadmap)

### Why?
Every single project I've worked on needed some hacked together CSV importer. React Importer tries to fix this by implementing a modern CSV import flow for React projects!

### Demo
Visit [here](https://czhu12.github.io/react-importer/) to see what React Importer looks like in action!

### Installation

```bash
npm install --save react-importer
```

### Usage

```jsx
import Importer from 'react-importer'

<Importer
  fields={[
    {
      label: "Name",
      key: "name",
      validators: [
        { validate: "required" },
      ],
      transformers: [
        { transform: "lower_case" },
      ]
    },
    {
      label: "Email", key: "email", validators: [
        { validate: "required" },
        { validate: "unique", error: "This email is not unique" },
      ]
    },
    { label: "State", key: "state" },
  ]}
  onComplete={(data) => {
    console.log(data)
  }}
/>
```

### Documentation
(TODO)

### Roadmap
* Make readme and documentation better
* Support existing data
* Add support for callbacks
* Add support for themeing
* Animated progress bar

## License

MIT © [czhu12](https://github.com/czhu12)
