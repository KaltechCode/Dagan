import type {
  AuthResponse,
  RegisterRequest,
  LoginRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  LogoutRequest,
} from "@/types/auth";

import { wooCommerceClient } from "../libs/woocommerce/client";

class AuthService {
  async register(payload: RegisterRequest): Promise<AuthResponse> {
    return wooCommerceClient.post<AuthResponse>("/auth/register", payload);
  }

  async login(payload: LoginRequest): Promise<AuthResponse> {
    return wooCommerceClient.post<AuthResponse>("/auth/login", payload);
  }

  async logout(payload: LogoutRequest): Promise<void> {
    await wooCommerceClient.post("/auth/logout", payload);
  }

  async refresh(): Promise<AuthResponse> {
    return wooCommerceClient.post<AuthResponse>("/auth/refresh");
  }

  async forgotPassword(payload: ForgotPasswordRequest): Promise<void> {
    await wooCommerceClient.post("/auth/forgot-password", payload);
  }

  async resetPassword(payload: ResetPasswordRequest): Promise<void> {
    await wooCommerceClient.post("/auth/reset-password", payload);
  }

  async changePassword(payload: ChangePasswordRequest): Promise<void> {
    await wooCommerceClient.post("/auth/change-password", payload);
  }
}

export const authService = new AuthService();
