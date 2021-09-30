import React from 'react';
import Footer from './components/Footer';

import Layout from './components/Layout';
import Profile from './components/Profile';
import RepositoriesList from './components/RepositoriesList';

function App() {
  return (
    <>
      <Layout>
        <Profile />
        <RepositoriesList />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
