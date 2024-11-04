import React, { createContext, useContext, useState } from 'react';
import { TAuth } from '../types/auth';
import { TTokens } from '../types/auth';

import { AppContextType } from './types';

const AppContext = createContext<AppContextType>({
  setAuth: (auth: TAuth) => {
    return auth;
  },
  setTokens: (tokens: TTokens) => {
    return tokens;
  },
  setPlant: (plant: string) => {
    return plant;
  },
  setStock: (stock: string) => {
    return stock;
  },
  setPrincipalPlant: (princiaplPlant: string) => {
    return princiaplPlant;
  },
  setResetPlant: (resetPlant: string) => {
    return resetPlant;
  },
  setResetPrincipalPlant: (resetPrincipalPlant: string) => {
    return resetPrincipalPlant;
  },
  setModalInternetConnection: (modalInternetConnection: boolean) => {
    return modalInternetConnection;
  },
  setIsInternet: () => {},
});

export type childrenType = {
  children: React.ReactNode;
};

export const ContextWrapper = ({ children }: childrenType) => {
  const [auth, setAuth] = useState<TAuth | undefined>(undefined);
  const [tokens, setTokens] = useState<TTokens | undefined>(undefined);
  const [plant, setPlant] = useState<string | undefined>(undefined);
  const [stock, setStock] = useState<string | undefined>(undefined);
  const [princiaplPlant, setPrincipalPlant] = useState<string | undefined>(undefined);
  const [resetPlant, setResetPlant] = useState<string | undefined>(undefined);
  const [resetPrincipalPlant, setResetPrincipalPlant] = useState<string | undefined>(undefined);
  const [modalInternetConnection, setModalInternetConnection] = useState<boolean | undefined>(
    false,
  );
  const [isInternet, setIsInternet] = useState<boolean | undefined>(true);

  const values = {
    auth,
    setAuth,
    tokens,
    setTokens,
    plant,
    setPlant,
    stock,
    setStock,
    princiaplPlant,
    setPrincipalPlant,
    resetPlant,
    setResetPlant,
    resetPrincipalPlant,
    setResetPrincipalPlant,
    modalInternetConnection,
    setModalInternetConnection,
    isInternet,
    setIsInternet,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
