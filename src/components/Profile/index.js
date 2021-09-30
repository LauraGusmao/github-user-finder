import React, { useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import * as S from './styles';

function Profile() {
  const { githubUser } = useContext(GithubContext);

  if (!githubUser) return <div>Loading...</div>;

  return (
    <S.Wrapper>
      <S.Image src={ githubUser.avatar_url } alt="User avatar" />
      <S.WrapperUser>
        <div>
          <h1>{ githubUser.name }</h1>
          <S.WrapperInfo>
            <h3>Username:</h3>
            <a href={ githubUser.html_url } target="_blank" rel="noreferrer">{ githubUser.login }</a>
          </S.WrapperInfo>
          <S.WrapperInfo>
            <h3>Location:</h3>
            <span>{ githubUser.location }</span>
          </S.WrapperInfo>
          <S.WrapperInfo>
            <h3>Company:</h3>
            <span>{ githubUser.company }</span>
          </S.WrapperInfo>
          <S.WrapperInfo>
            <h3>Website:</h3>
            <a href={ githubUser.blog } target="_blank" rel="noreferrer">{ githubUser.blog }</a>
          </S.WrapperInfo>
          <S.Bio>{ githubUser.bio }</S.Bio>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Repositories</h4>
            <span>{ githubUser.public_repos }</span>
          </div>
          <div>
            <h4>Followers</h4>
            <span>{ githubUser.followers }</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{ githubUser.following }</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{ githubUser.public_gists }</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperUser>
    </S.Wrapper>
  );
}

export default Profile;
