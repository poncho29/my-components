import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth/context";

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const { logged } = useContext(AuthContext);
  console.log(logged)

  return (logged) ? children : <Navigate to='/auth/login' />
}
