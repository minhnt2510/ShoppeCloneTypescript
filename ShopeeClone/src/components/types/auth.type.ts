import type { User } from "./user.type";
import type { ResponseApi } from "./utils.type";

export type AuthResponse = ResponseApi<{
  access_token: string;
  espires: string;
  user: User;
}>;
