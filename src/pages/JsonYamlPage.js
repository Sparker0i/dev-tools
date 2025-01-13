import React, { useState } from 'react';
import { TextArea, Button, Grid, Row, Column } from '@carbon/react';
import yaml from 'js-yaml';

function JsonYamlPage() {
  const [jsonInput, setJsonInput] = useState('');
  const [yamlInput, setYamlInput] = useState('');

  const handleJsonToYaml = () => {
    try {
      const jsonObj = JSON.parse(jsonInput);
      const yamlStr = yaml.dump(jsonObj);
      setYamlInput(yamlStr);
    } catch (error) {
      setYamlInput('Invalid JSON!');
    }
  };

  const handleYamlToJson = () => {
    try {
      const yamlObj = yaml.load(yamlInput);
      const jsonStr = JSON.stringify(yamlObj, null, 2);
      setJsonInput(jsonStr);
    } catch (error) {
      setJsonInput('Invalid YAML!');
    }
  };

  return (
    <Grid>
      <Column sm={4} md={8} lg={8}>
          <h2>JSON ↔ YAML Converter</h2>
          <div style={{ marginBottom: '1rem' }}>
            <TextArea
              labelText="JSON Input"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            />
            <Button style={{ marginTop: '1rem' }} onClick={handleJsonToYaml}>
              Convert JSON → YAML
            </Button>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <TextArea
              labelText="YAML Input"
              value={yamlInput}
              onChange={(e) => setYamlInput(e.target.value)}
            />
            <Button style={{ marginTop: '1rem' }} onClick={handleYamlToJson}>
              Convert YAML → JSON
            </Button>
          </div>
        </Column>
    </Grid>
  );
}

export default JsonYamlPage;
