import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{ 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b114f;
  color: #323232;
}
`;

export const Main = styled.div`
  width: 350mm;
  max-width: calc(100vw - 50mm);
  padding: 10mm;
  flex-grow: 1;
  background-color: white;
  font-family: 'Montserrat', sans-serif;
`;
