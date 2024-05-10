'use client';

import React, { useCallback } from 'react';

type AppContextType = {
  isOpenMenu: boolean;
  openMenu: (value?: boolean) => void;
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
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const openMenu = useCallback(
    (value?: boolean) => {
      const next = value === undefined ? !isOpenMenu : value;
      window.document.body.style.overflow = next ? 'hidden' : '';
      setIsOpenMenu(next);
    },
    [isOpenMenu],
  );

  return (
    <AppContext.Provider value={{ isOpenMenu, openMenu }}>
      {children}
      {isOpenMenu && (
        <div
          className={'fixed inset-0 z-30 bg-gray-900/50'}
          onClick={() => openMenu(false)}
        />
      )}
    </AppContext.Provider>
  );
};
