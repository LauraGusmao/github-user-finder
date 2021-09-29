import React from 'react';

import Layout from './components/Layout';
import Profile from './components/Profile';
import RepositoriesList from './components/RepositoriesList';

function App() {
  return (
    <Layout>
      <Profile />
      <RepositoriesList />
    </Layout>
  );
}

export default App;
