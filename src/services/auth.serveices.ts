import {
  AuthResponse,
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  UpdatePasswordRequest,
  UpdateProfileRequest,
} from "@/types/auths";
import { apiClient } from "../libs/woocommerce/client";
import { API } from "@/libs/api/endpoints";
// import {
//   AuthResponse,
//   ForgotPasswordRequest,
//   LoginRequest,
//   RegisterRequest,
//   ResetPasswordRequest,
//   UpdatePasswordRequest,
//   UpdateProfileRequest,
// } from "../";

class AuthService {
  login(payload: LoginRequest): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>(API.LOGIN, payload);
  }

  register(payload: RegisterRequest): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>(API.REGISTER, payload);
  }

  logout(): Promise<void> {
    return apiClient.post<void>(API.LOGOUT);
  }

  forgotPassword(payload: ForgotPasswordRequest): Promise<void> {
    return apiClient.post<void>(API.FORGOT_PASSWORD, payload);
  }

  resetPassword(payload: ResetPasswordRequest): Promise<void> {
    return apiClient.post<void>(API.RESET_PASSWORD, payload);
  }

  getProfile(): Promise<AuthResponse> {
    return apiClient.get<AuthResponse>(API.ME);
  }

  updateProfile(payload: UpdateProfileRequest): Promise<AuthResponse> {
    return apiClient.put<AuthResponse>(API.PROFILE, payload);
  }

  updatePassword(payload: UpdatePasswordRequest): Promise<void> {
    return apiClient.put<void>(API.PASSWORD, payload);
  }

  refreshSession(): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>(API.REFRESH_TOKEN);
  }
}

export const authService = new AuthService();
