export interface AuthState {
  user: Customer | null;
  authenticated: boolean;
  loading: boolean;
  initialized: boolean;
}

export interface AuthResponse {
  user: Customer;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  key: string;
  login: string;
  password: string;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  remember?: boolean;
}
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  phone?: string;
}

export interface CustomerAddress {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phone?: string;
}

export interface AddressBook {
  billing: CustomerAddress;
  shipping: CustomerAddress;
}

export interface Customer {
  id: number;
  email: string;
  username: string;

  firstName: string;
  lastName: string;
  displayName: string;

  avatar?: string;

  role: string;

  phone?: string;

  addresses: AddressBook;
}
