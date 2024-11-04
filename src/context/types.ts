import { TAuth, TTokens } from '../types/auth';

export type AppContextType = {
  auth?: TAuth;
  setAuth(auth?: TAuth): void;
  tokens?: TTokens;
  setTokens(tokens?: TTokens): void;
  plant?: string;
  setPlant(plant?: string): void;
  stock?: string;
  setStock(stock?: string): void;
  princiaplPlant?: string;
  setPrincipalPlant(princiaplPlant?: string): void;
  resetPlant?: string;
  setResetPlant(resetPlant?: string): void;
  resetPrincipalPlant?: string;
  setResetPrincipalPlant(resetPrincipalPlant?: string): void;
  modalInternetConnection?: boolean;
  setModalInternetConnection(modalInternetConnection?: boolean): void;
  isInternet?: boolean;
  setIsInternet(IsInternet?: boolean): void;
};
