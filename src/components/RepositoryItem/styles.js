import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: auto;
  height: auto;

  
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 8px 0;
  }

`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  h3 {
    margin-right: 8px;
    font-weight: bold;
    font-size: 16px;
  }

  p {
    font-size: 16px;
  }

  a {
    font-size: 18px;
    color: hotpink;
    text-decoration: none;
  }
`;
