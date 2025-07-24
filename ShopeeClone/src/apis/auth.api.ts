import type { AuthResponse } from "../components/types/auth.type";
import http from "../Util/https";

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>("/register", body);
