import React, { useState } from 'react';
import { TextArea, Button, Grid, Row, Column, Select, SelectItem } from '@carbon/react';
import CryptoJS from 'crypto-js';

function ChecksumPage() {
    const [input, setInput] = useState('');
    const [algorithm, setAlgorithm] = useState('MD5');
    const [output, setOutput] = useState('');

    const handleGenerate = () => {
        let hash;
        switch (algorithm) {
            case 'MD5':
                hash = CryptoJS.MD5(input).toString();
                break;
            case 'SHA1':
                hash = CryptoJS.SHA1(input).toString();
                break;
            case 'SHA256':
                hash = CryptoJS.SHA256(input).toString();
                break;
            default:
                hash = 'Unsupported algorithm';
        }
        setOutput(hash);
    };

    return (
        <Grid>
            <Column sm={4} md={8} lg={8}>
                <h2>Checksum Generator</h2>
                <TextArea
                    labelText="Input Text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Select
                    id="checksum-select"
                    labelText="Algorithm"
                    value={algorithm}
                    onChange={(e) => setAlgorithm(e.target.value)}
                    style={{ marginTop: '1rem' }}
                >
                    <SelectItem value="MD5" text="MD5" />
                    <SelectItem value="SHA1" text="SHA1" />
                    <SelectItem value="SHA256" text="SHA256" />
                </Select>

                <div style={{ marginTop: '1rem' }}>
                    <Button onClick={handleGenerate}>Generate Checksum</Button>
                </div>

                <TextArea
                    labelText="Checksum Output"
                    style={{ marginTop: '1rem' }}
                    readOnly
                    value={output}
                />
            </Column>
        </Grid>
    );
}

export default ChecksumPage;
