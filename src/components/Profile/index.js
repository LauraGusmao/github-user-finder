import React, { useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import * as S from './styles';

function Profile() {
  const { githubInfo } = useContext(GithubContext);
  const { user } = githubInfo;
  return (
    <S.Wrapper>
      <S.Image src={ user.avatar } alt="User avatar" />
      <S.WrapperUserInfo>
        <div>
          <h1>{ user.name }</h1>
          <S.WrapperUsername>
            <h3>Username:</h3>
            <a href={ user.html_url } target="_blank" rel="noreferrer">{ user.login }</a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Repositories</h4>
            <span>{ user.public_repos }</span>
          </div>
          <div>
            <h4>Followers</h4>
            <span>{ user.followers }</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{ user.following }</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{ user.public_gists }</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperUserInfo>
    </S.Wrapper>
  );
}

export default Profile;
