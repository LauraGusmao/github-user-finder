import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const WrapperUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 200px;
  margin-left: 32px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Bio = styled.p`
  margin: 16px 0;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;

  div {
    margin: 8px;
    margin-left: 0;
    text-align: center;

    h4 {
      margin-bottom: 8px;
    }
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: hotpink;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
