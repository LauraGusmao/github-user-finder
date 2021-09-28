import React from 'react';
import * as S from './styles';

function Profile() {
  return (
    <S.Wrapper>
      <S.Image src="https://" alt="User avatar" />
      <S.WrapperUserInfo>
        <div>
          <h1>Name</h1>
          <S.WrapperUsername>
            <h3>Username:</h3>
            <a href="http://" target="_blank" rel="noreferrer">username</a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Stars:</h4>
            <span>1</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperUserInfo>
    </S.Wrapper>
  );
}

export default Profile;
