import React from 'react';
// import GithubContext from '../../context/GithubContext';
import * as S from './styles';

function Header() {
  return (
    <header>
      <S.Title>GitHub User Finder</S.Title>
      <S.Wrapper>
        <input type="text" placeholder="Digite o username" />
        <button type="submit">Buscar</button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
