import { CURRENT_USER, type User } from "./mockData";

export function useAuth(): { user: User; isAdmin: boolean } {
  return {
    user: CURRENT_USER,
    isAdmin: CURRENT_USER.role === "admin",
  };
}
