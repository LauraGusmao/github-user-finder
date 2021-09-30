import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { VscRepoForked } from 'react-icons/vsc';

import * as S from './styles';

function RepositoryItem({
  name, owner, description, linkToRepo, forked,
}) {
  return (
    <S.Wrapper>
      <h2>{ name }</h2>
      { description && <p>{ description }</p> }
      <S.WrapperInfo>
        <h3>Owner:</h3>
        <p>{ owner }</p>
        { forked && <VscRepoForked aria-label="forked repo" /> }
      </S.WrapperInfo>
      <S.WrapperInfo>
        <h3>Link:</h3>
        <a href={ linkToRepo } target="_blank" rel="noreferrer" aria-label="Go to Repo in GitHub"><FaGithub className="icon" /></a>
      </S.WrapperInfo>

    </S.Wrapper>
  );
}

export default RepositoryItem;
