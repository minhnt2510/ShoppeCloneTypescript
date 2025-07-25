import type { AuthResponse } from "../components/types/auth.type";
import http from "../Utils/https";

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>("/register", body);
export const login = (body: { email: string; password: string }) =>
  http.post<AuthResponse>("/login", body);
