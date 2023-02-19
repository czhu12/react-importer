# react-importer

[![NPM](https://img.shields.io/npm/v/react-importer.svg)](https://www.npmjs.com/package/react-importer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Demo](https://github.com/czhu12/react-importer/raw/master/example/public/demo.gif)

Contents
========
 * [Why?](#why)
 * [Demo](#demo)
 * [Installation](#installation)
 * [Usage](#usage)
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
    { label: "State", key: "state" },
  ]}
  onComplete={(data) => {
    console.log(data)
  }}
/>
```

### Roadmap
* Make readme and documentation better
* Support existing data
* Add support for callbacks
* Add support for themeing
* Animated progress bar
* Completion page summary

## License

MIT © [czhu12](https://github.com/czhu12)
