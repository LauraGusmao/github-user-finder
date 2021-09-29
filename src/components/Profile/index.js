import React, { useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import * as S from './styles';

function Profile() {
  const { githubUser } = useContext(GithubContext);
  const { data } = githubUser;

  if (!data) return <div>Loading...</div>;

  return (
    <S.Wrapper>
      <S.Image src={ data.avatar_url } alt="User avatar" />
      <S.WrapperUserInfo>
        <div>
          <h1>{ data.name }</h1>
          <S.WrapperUsername>
            <h3>Username:</h3>
            <a href={ data.html_url } target="_blank" rel="noreferrer">{ data.login }</a>
          </S.WrapperUsername>
          <S.Location>{ data.location }</S.Location>
          <S.Bio>{ data.bio }</S.Bio>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Repositories</h4>
            <span>{ data.public_repos }</span>
          </div>
          <div>
            <h4>Followers</h4>
            <span>{ data.followers }</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{ data.following }</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{ data.public_gists }</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperUserInfo>
    </S.Wrapper>
  );
}

export default Profile;
