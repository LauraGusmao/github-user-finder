import React from 'react';

import Layout from './components/Layout';
import Profile from './components/Profile';
import RepositoriesList from './components/RepositoriesList';

import { Reset } from 'styled-reset'
import { GlobalStyle } from './global/globalStyle';


function App() {
  return (
    <main>
        <Reset />
        <GlobalStyle />
        <Layout>
          <Profile />
          <RepositoriesList />
        </Layout>
    </main>
  );
}

export default App;
