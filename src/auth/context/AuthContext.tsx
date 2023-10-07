import { createContext } from "react";

interface ContextProps {
  logged: boolean;

  handleLogin: () => void;
  handleLogout: () => void;
}

export const AuthContext = createContext({} as ContextProps);