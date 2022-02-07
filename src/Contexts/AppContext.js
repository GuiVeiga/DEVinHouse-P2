import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [search, setSearch] = useState('');

  return (
    <AppContext.Provider value={(search, setSearch)}>
      {children}
    </AppContext.Provider>
  );
}

// Tentei implementar o useContext para várias funcionalidades dos componentes,
// principalmente aos estados de list e Setlist, e aos useEffects na hora de dar fetch nos endpoints.
// Porém ele sempre retorna undefined. Logo, deixei desativado.
