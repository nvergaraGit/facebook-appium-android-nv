import { HelpCenterData } from './helpCenter';

export type Files = {
  videos: {
    description: string;
    duration: string;
    id: number;
    link: string;
    title: string;
    visible: boolean;
  }[];
  documents: {
    description: string;
    id: number;
    link: string;
    title: string;
    visible: boolean;
  }[];
};

export type MenuStackParamList = {
  Menu: undefined;
  Products: undefined;
  About: undefined;
  Auth: undefined;
  Stock: undefined;
  NoteRed: undefined;
  FillRate: undefined;
  HelpCenter: undefined;
  BudgetGoals: undefined;
  HelpCenterListFiles: { typeFile: string; data: HelpCenterData };
  HelpCenterFiles: { url: string };
};
export type MenuStackParamKeys = keyof MenuStackParamList;

export type TMenu = {
  image: JSX.Element;
  title: string;
  path?: MenuStackParamKeys;
  analiticsAction: string;
}[];
