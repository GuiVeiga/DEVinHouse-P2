import React from 'react';
import { GlobalStyles, Main } from './GlobalStyles.style';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
}

export default App;
