import { useReducer } from "react";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

interface Props {
  children: React.ReactNode;
}

export interface AuthState {
  logged: boolean;
}

const AUTH_INITIAL_STATE: AuthState = {
  logged: false,
}

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const handleLogin = () => {
    dispatch({ type: 'Auth - Login' });
  }

  const handleLogout = () => {
    dispatch({ type: 'Auth - Logout' })
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      handleLogin,
      handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  )
}