import { User } from "@/types/auths";

export interface AuthState {
  user: User | null;

  isAuthenticated: boolean;

  loading: boolean;
}

export const initialState: AuthState = {
  user: null,

  isAuthenticated: false,

  loading: false,
};
