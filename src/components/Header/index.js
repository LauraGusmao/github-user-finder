import React, { useContext, useState } from 'react';
import GithubContext from '../../context/GithubContext';
import * as S from './styles';

function Header() {
  const [searchInput, setSearchInput] = useState();
  const { getUser } = useContext(GithubContext);

  const handleSearchInput = () => {
    if (!searchInput) {
      // eslint-disable-next-line no-alert
      alert('Enter a username');
    }
    getUser(searchInput);
  };

  return (
    <header>
      <S.Title>GitHub User Finder</S.Title>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Enter a username"
          onChange={ (event) => setSearchInput(event.target.value) }
        />
        <button type="submit" onClick={ handleSearchInput }>
          Search
        </button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
