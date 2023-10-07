import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth/context";

interface Props {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
  const { logged } = useContext(AuthContext);

  return (!logged) ? children : <Navigate to='/' />
}
