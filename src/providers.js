import React from 'react';

import { Reset } from 'styled-reset';
import App from './App';

import GlobalStyle from './global/globalStyle';
import GithubProvider from './context/GithubProvider';

function Providers() {
  return (
    <main>
      <Reset />
      <GlobalStyle />
      <GithubProvider>
        <App />
      </GithubProvider>
    </main>
  );
}

export default Providers;
