import React from 'react';

import Layout from './components/Layout';
import Profile from './components/Profile';

import { Reset } from 'styled-reset'


function App() {
  return (
    <main>
        <Reset />
        <Layout>
          <Profile />
          <div>Repositories</div>
        </Layout>
      
    </main>
  );
}

export default App;
