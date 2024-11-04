export type TAuth = {
  username: string;
  id: string;
  roles: string;
  ACL: TACLS[];
  name: string;
  needPasswordUpdate: boolean;
};
export type TACLS = {
  actions: string[];
  resources: string[];
  _id: string;
};
export type TTokens = {
  token: string;
  refreshToken: string;
};
