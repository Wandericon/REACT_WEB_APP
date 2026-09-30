export interface User {
  id: string;
  name: string;
}

export interface AuthContextValue {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
}
