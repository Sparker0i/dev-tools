import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Column, ClickableTile } from '@carbon/react';

const HomePage = () => {
    return (
        <Grid>
            <Column sm={1} md={2} lg={4}>
                <Link to="/base64" style={{ textDecoration: 'none' }}>
                    <ClickableTile style={{ margin: '1rem 0', cursor: 'pointer' }}>
                        Base64 Text Encoder/Decoder
                    </ClickableTile>
                </Link>
            </Column>
            <Column sm={1} md={2} lg={4}>
                <Link to="/checksum" style={{ textDecoration: 'none' }}>
                    <ClickableTile style={{ margin: '1rem 0', cursor: 'pointer' }}>
                        Checksum Generator
                    </ClickableTile>
                </Link>
            </Column>
            <Column sm={1} md={2} lg={4}>
                <Link to="/json-formatter" style={{ textDecoration: 'none' }}>
                    <ClickableTile style={{ margin: '1rem 0', cursor: 'pointer' }}>
                        JSON Formatter
                    </ClickableTile>
                </Link>
            </Column>
            <Column sm={1} md={2} lg={4}>
                <Link to="/json-yaml" style={{ textDecoration: 'none' }}>
                    <ClickableTile style={{ margin: '1rem 0', cursor: 'pointer' }}>
                        JSON ↔ YAML Converter
                    </ClickableTile>
                </Link>
            </Column>
        </Grid>
    );
};

export default HomePage;
