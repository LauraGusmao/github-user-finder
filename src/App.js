import React, { useContext } from 'react';
import GithubContext from './context/GithubContext';

import Layout from './components/Layout';
import Profile from './components/Profile';
import RepositoriesList from './components/RepositoriesList';
import Footer from './components/Footer';

function App() {
  const { loading } = useContext(GithubContext);

  return (
    <>
      <Layout>
        { loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Profile />
            <RepositoriesList />
          </>
        ) }
      </Layout>
      <Footer />
    </>
  );
}

export default App;
