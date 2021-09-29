import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 4px;
    padding-left: 8px;
    width: 100%;
    height: 32px;
    font-size: 16px;
  }

  button {
    margin: 0 8px;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: #457b9d;
    color: #f1faee;

    &:hover {
    background-color: #1d3557;
    cursor: pointer;
    }

    /* &:active {
    background-color: #1d3557;
    } */
  }
`;

export default Wrapper;
