import React, { useState } from 'react';
import Importer from 'react-importer'
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import 'react-importer/dist/index.css'

const App = () => {
  const [value, setValue] = useState(null);
  const onComplete = (data) => {
    setValue(data);
  }
  return (
    <div style={{marginTop: '50px', marginBottom: '50px'}}>
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
              {
                validate: "regex_matches",
                regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            ]
          },
          {
            label: "Phone Number", key: "phone_number", validators: [
              { validate: "required" },
            ]
          },
          {
            label: "Street", key: "street"
          },
          {
            label: "City", key: "city"
          },
          {
            label: "State", key: "state"
          },
        ]}
        onComplete={onComplete}
      />
      {value && (
        <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
          <h4>Output</h4>
          <Editor
            mode='code'
            navigationBar={false}
            statusBar={false}
            mainMenuBar={false}
            value={value}
            onChange={v => setValue(v)}
          />
        </div>
      )}
    </div>
  )
};

export default App;
