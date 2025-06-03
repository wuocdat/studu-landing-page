import ApiService from '@/services/ApiService';
import { SignInResponse, SignUpResponse } from '@/@types/auth';

export const AuthService = {
  async signIn(email: string, password: string): Promise<SignInResponse> {
    const res = await ApiService.fetchData<{ email: string; password: string }, SignInResponse>({
      url: '/users/sign-in',
      method: 'POST',
      data: { email, password },
    });
    return res.data;
  },

  async signUp(name: string, email: string, password: string): Promise<SignUpResponse> {
    const res = await ApiService.fetchData<{ email: string; password: string }, SignUpResponse>({
      url: '/api/v1/auth/register/email',
      method: 'POST',
      data: { email, password },
    });
    return res.data;
  },
};
