import styled from 'styled-components';

export const SearchBar = styled.input`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  border: 1px solid grey;
  padding-left: 10px;
  line-height: normal;
  font-size: 18px;
  color: black;

  &::placeholder {
    color: grey;
    opacity: 0.4;
  }
`;
