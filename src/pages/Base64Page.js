import React, { useState } from 'react';
import { Toggle, TextArea, Button, Grid, Column } from '@carbon/react';

function Base64Page() {
  const [liveMode, setLiveMode] = useState(true);
  const [plainText, setPlainText] = useState('');
  const [base64Text, setBase64Text] = useState('');

  // Handle changes to Plain Text
  const handlePlainTextChange = (event) => {
    const newPlainText = event.target.value;
    setPlainText(newPlainText);

    if (liveMode) {
      try {
        setBase64Text(btoa(newPlainText));
      } catch {
        setBase64Text('Error encoding to Base64');
      }
    }
  };

  // Handle changes to Base64 Text
  const handleBase64TextChange = (event) => {
    const newBase64Text = event.target.value;
    setBase64Text(newBase64Text);

    if (liveMode) {
      try {
        setPlainText(atob(newBase64Text));
      } catch {
        setPlainText('Invalid Base64 string');
      }
    }
  };

  // Manual Encode when Live Mode is off
  const handleEncode = () => {
    try {
      setBase64Text(btoa(plainText));
    } catch {
      setBase64Text('Error encoding to Base64');
    }
  };

  // Manual Decode when Live Mode is off
  const handleDecode = () => {
    try {
      setPlainText(atob(base64Text));
    } catch {
      setPlainText('Invalid Base64 string');
    }
  };

  return (
    <Grid>
      {/* 1. Header spanning full width */}
      <Column sm={4} md={8} lg={16} style={{marginBottom: '2rem'}}>
        <h2>Base64 Encoder/Decoder</h2>
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

      {/* 3. Plain Text (half width on lg) */}
      <Column sm={4} md={4} lg={8}>
        <TextArea
          labelText="Plain Text"
          value={plainText}
          onChange={handlePlainTextChange}
          rows={20}
          style={{ marginBottom: '1rem' }}
        />
        {!liveMode && <Button
            kind="primary"
            onClick={handleEncode}
          >
            Encode
        </Button>}
      </Column>

      {/* 3. Base64 Text (half width on lg) */}
      <Column sm={4} md={4} lg={8}>
        <TextArea
          labelText="Base64 Text"
          value={base64Text}
          onChange={handleBase64TextChange}
          rows={20}
          style={{ marginBottom: '1rem' }}
        />
        {!liveMode && <Button kind="primary" onClick={handleDecode}>
            Decode
        </Button>}
      </Column>
    </Grid>
  );
}

export default Base64Page;
