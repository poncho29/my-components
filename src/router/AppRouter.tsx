import { Navigate, Route, Routes } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import App from '../App';
import { Login } from '../auth/pages/Login';
import { Register } from '../auth/pages/Register';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route
          path='/auth/*'
          element={
            <PublicRoute>
              <Routes>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='/*' element={<Navigate to='login' />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        />

      </Routes>
    </>
  )
}
