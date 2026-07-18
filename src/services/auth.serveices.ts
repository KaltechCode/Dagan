import {
  AuthResponse,
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  UpdatePasswordRequest,
  UpdateProfileRequest,
} from "@/types/auths";
import { API } from "@/libs/api/endpoints";
import { wooCommerceClient } from "../libs/woocommerce/client";
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
    return wooCommerceClient.post<AuthResponse>(API.LOGIN, payload);
  }

  register(payload: RegisterRequest): Promise<AuthResponse> {
    return wooCommerceClient.post<AuthResponse>(API.REGISTER, payload);
  }

  logout(): Promise<void> {
    return wooCommerceClient.post<void>(API.LOGOUT);
  }

  forgotPassword(payload: ForgotPasswordRequest): Promise<void> {
    return wooCommerceClient.post<void>(API.FORGOT_PASSWORD, payload);
  }

  resetPassword(payload: ResetPasswordRequest): Promise<void> {
    return wooCommerceClient.post<void>(API.RESET_PASSWORD, payload);
  }

  getProfile(): Promise<AuthResponse> {
    return wooCommerceClient.get<AuthResponse>(API.ME);
  }

  updateProfile(payload: UpdateProfileRequest): Promise<AuthResponse> {
    return wooCommerceClient.put<AuthResponse>(API.PROFILE, payload);
  }

  updatePassword(payload: UpdatePasswordRequest): Promise<void> {
    return wooCommerceClient.put<void>(API.PASSWORD, payload);
  }

  refreshSession(): Promise<AuthResponse> {
    return wooCommerceClient.post<AuthResponse>(API.REFRESH_TOKEN);
  }
}

export const authService = new AuthService();
