export type THelpCenterCategories = {
  image: JSX.Element;
  title: string;
  typeFile: string;
  qty: number;
}[];

export type Document = {
  id: number;
  link: string;
  title: string;
  visible: boolean;
};

export type Video = {
  description: string;
  duration: string;
  id: number;
  link: string;
  title: string;
  visible: boolean;
};

export type HelpCenterData = {
  documents: Document[];
  videos: Video[];
};

export type HelpCenterResponse = {
  getHelpDocuments: {
    data: {
      documents: Document[];
      videos: Video[];
    };
  };
};
