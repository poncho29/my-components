import api from '../api';

import { RegisterBody, RegisterResponse } from '../interface';

export const register = (body: RegisterBody) => {
  return api.post<RegisterResponse>('/auth/register', body)
}