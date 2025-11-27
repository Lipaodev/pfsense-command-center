import { apiPost } from './httpClient';
import { User } from '@/types';

export interface LoginResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    return apiPost<LoginResponse>('/login', credentials);
  },
};
