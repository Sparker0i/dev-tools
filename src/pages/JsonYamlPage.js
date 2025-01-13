import React, { useState } from 'react';
import { Toggle, TextArea, Button, Grid, Column } from '@carbon/react';
import yaml from 'js-yaml';

function JsonYamlPage() {
  const [liveMode, setLiveMode] = useState(true);
  const [jsonInput, setJsonInput] = useState('');
  const [yamlInput, setYamlInput] = useState('');

  // When user edits the JSON text area
  const handleJsonChange = (e) => {
    const newJson = e.target.value;
    setJsonInput(newJson);

    // If live mode is ON, automatically convert JSON -> YAML
    if (liveMode) {
      try {
        const jsonObj = JSON.parse(newJson);
        setYamlInput(yaml.dump(jsonObj));
      } catch (error) {
        setYamlInput('Invalid JSON!');
      }
    }
  };

  // When user edits the YAML text area
  const handleYamlChange = (e) => {
    const newYaml = e.target.value;
    setYamlInput(newYaml);

    // If live mode is ON, automatically convert YAML -> JSON
    if (liveMode) {
      try {
        const yamlObj = yaml.load(newYaml);
        setJsonInput(JSON.stringify(yamlObj, null, 2));
      } catch (error) {
        setJsonInput('Invalid YAML!');
      }
    }
  };

  // Manual convert JSON -> YAML
  const convertJsonToYaml = () => {
    try {
      const jsonObj = JSON.parse(jsonInput);
      setYamlInput(yaml.dump(jsonObj));
    } catch (error) {
      setYamlInput('Invalid JSON!');
    }
  };

  // Manual convert YAML -> JSON
  const convertYamlToJson = () => {
    try {
      const yamlObj = yaml.load(yamlInput);
      setJsonInput(JSON.stringify(yamlObj, null, 2));
    } catch (error) {
      setJsonInput('Invalid YAML!');
    }
  };

  return (
    <Grid>
      {/* 1. Header spanning full width */}
      <Column sm={4} md={8} lg={16} style={{marginBottom: '2rem'}}>
        <h2>JSON ↔ YAML Converter</h2>
      </Column>

      {/* 2. Toggle spanning full width */}
      <Column sm={4} md={8} lg={16} style={{marginBottom: '2rem'}}>
        <Toggle
          id="live-mode-toggle"
          labelText="Live Mode"
          toggled={liveMode}
          onToggle={() => setLiveMode((prev) => !prev)}
        />
      </Column>

      {/* 3. JSON Text area (half width on lg) */}
      <Column sm={4} md={4} lg={8}>
        <TextArea
          labelText="JSON Input"
          value={jsonInput}
          onChange={handleJsonChange}
          style={{ marginBottom: '1rem' }}
        />
      </Column>

      {/* 3. YAML Text area (half width on lg) */}
      <Column sm={4} md={4} lg={8}>
        <TextArea
          labelText="YAML Input"
          value={yamlInput}
          onChange={handleYamlChange}
          style={{ marginBottom: '1rem' }}
        />
      </Column>

      {/* 4. Buttons if Live Mode is OFF */}
      {!liveMode && (
        <Column sm={4} md={8} lg={16}>
          <Button
            kind="primary"
            onClick={convertJsonToYaml}
            style={{ marginRight: '0.5rem' }}
          >
            Convert JSON → YAML
          </Button>
          <Button kind="secondary" onClick={convertYamlToJson}>
            Convert YAML → JSON
          </Button>
        </Column>
      )}
    </Grid>
  );
}

export default JsonYamlPage;
