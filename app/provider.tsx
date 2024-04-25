'use client';

import React from 'react';

type AppContextType = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = React.createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === null) {
    throw new Error();
  }
  return context;
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
      {openMenu && (
        <div
          className={'fixed inset-0 z-30 bg-gray-900/50'}
          onClick={() => {
            if (window.document.body.classList.contains('overflow-hidden')) {
              window.document.body.classList.remove('overflow-hidden');
            }
            setOpenMenu(false);
          }}
        />
      )}
    </AppContext.Provider>
  );
};
