import { AuthState } from "./AuthProvider"

type AuthActionType =
 | { type: 'Auth - Login' }
 | { type: 'Auth - Logout' }

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch(action.type) {
    case 'Auth - Login':
      return {
        ...state,
        logged: true,
      }
    
    case 'Auth - Logout': 
      return {
        ...state,
        logged: false
      }

    default:
      return state;
  }
}