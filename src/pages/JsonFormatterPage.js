import React, { useState } from 'react';
import { TextArea, Button, Grid, Row, Column } from '@carbon/react';

function JsonFormatterPage() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleFormat = () => {
        try {
            const parsed = JSON.parse(input);
            const formatted = JSON.stringify(parsed, null, 2);
            setOutput(formatted);
        } catch (error) {
            setOutput('Invalid JSON!');
        }
    };

    return (
        <Grid>
            <Column sm={4} md={8} lg={8}>
                <h2>JSON Formatter</h2>
                <TextArea
                    labelText="Input JSON"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div style={{ marginTop: '1rem' }}>
                    <Button onClick={handleFormat}>Format JSON</Button>
                </div>
                <TextArea
                    labelText="Output"
                    style={{ marginTop: '1rem' }}
                    readOnly
                    value={output}
                />
            </Column>
        </Grid>
    );
}

export default JsonFormatterPage;
