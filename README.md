# react-importer

> A modern importer in 100% React

[![NPM](https://img.shields.io/npm/v/react-importer.svg)](https://www.npmjs.com/package/react-importer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Demo](https://github.com/czhu12/react-importer/raw/master/example/public/demo.gif)

## Install

```bash
npm install --save react-importer
```

## Usage

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

## License

MIT © [czhu12](https://github.com/czhu12)
