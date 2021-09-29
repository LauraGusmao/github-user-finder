import React, { useContext, useState } from 'react';
import GithubContext from '../../context/GithubContext';
import * as S from './styles';

function Header() {
  const [searchInput, setSearchInput] = useState();
  const { getUser } = useContext(GithubContext);

  const handleSearchInput = () => {
    if (!searchInput) {
      // eslint-disable-next-line no-alert
      alert('Digite um username');
    }
    getUser(searchInput);
  };

  return (
    <header>
      <S.Title>GitHub User Finder</S.Title>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username"
          onChange={ (event) => setSearchInput(event.target.value) }
        />
        <button type="submit" onClick={ handleSearchInput }>
          Buscar
        </button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
