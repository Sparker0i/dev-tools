import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Header,
  HeaderName,
  Theme,
  Content,
} from '@carbon/react';

// Pages
import HomePage from './pages/HomePage';
import Base64Page from './pages/Base64Page';
import ChecksumPage from './pages/ChecksumPage';
import JsonFormatterPage from './pages/JsonFormatterPage';
import JsonYamlPage from './pages/JsonYamlPage';

function App() {
  return (
    <BrowserRouter>
      {/* 
        Carbon's Theme component can wrap your entire application to apply
        a selected Carbon theme, e.g., "g90", "g100", "white", etc.
      */}
      <Theme theme="g100">
        <Header aria-label="Carbon Converters">
          <HeaderName href="/" prefix="Sparker0i" as={Link} to="/">
            Dev Tools
          </HeaderName>
        </Header>

        <Content style={{ marginTop: '3rem', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/base64" element={<Base64Page />} />
            <Route path="/checksum" element={<ChecksumPage />} />
            <Route path="/json-formatter" element={<JsonFormatterPage />} />
            <Route path="/json-yaml" element={<JsonYamlPage />} />
          </Routes>
        </Content>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
