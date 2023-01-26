/*
 Main type for using is the user
*/

export interface User {
  fullname: string;
  email: string;
  token: string;
}

export type AuthContextType = {
  auth: (email: string, password: string, type: string) => void;
  ifLogged: () => boolean;
  setUserData: () => void;
  logout: () => void;
};
