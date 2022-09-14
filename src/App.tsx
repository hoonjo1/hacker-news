import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';

import Layout from './Layout';
import { Router } from './Router';

import { getStorage } from './utils/storage';

function App() {
  const [isDark, setIsDark] = useState(getStorage('isDarkMode'));
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Layout isDark={isDark} setIsDark={setIsDark}>
          <Router />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;

// () => setIsDark(!isDark);
