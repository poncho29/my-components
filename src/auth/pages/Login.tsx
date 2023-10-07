import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context"

export const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const onLogin = () => {
    handleLogin();

    navigate('/', { replace: true })
  }

  return (
    <div className="w-full h-screen">
      <nav className="w-full h-9 flex items-center px-3 bg-cyan-600">
        <h1 className="text-white">MY COMPONENTS</h1>
      </nav>

      <div className="flex justify-center mt-20">
        <button
          className="px-3 py-2 rounded-lg bg-cyan-300"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </div>
  )
}
