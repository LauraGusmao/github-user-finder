import React from 'react';

import Header from '../Header';

import * as S from './styles';

function Layout({ children }) {
  return (
    <S.WrapperLayout>
      <Header />
      { children }
    </S.WrapperLayout>
  );
}

export default Layout;
