import { createContext, useContext, useState, type ReactNode } from "react";
import { ALL_USERS, type User } from "./mockData";

type AuthCtx = {
  user: User | null;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthCtx | null>(null);

function restore(): User | null {
  try {
    const id = localStorage.getItem("auth_uid");
    if (!id) return null;
    return ALL_USERS.find((u) => u.id === Number(id)) ?? null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(restore);

  function login(email: string, password: string): boolean {
    const found = ALL_USERS.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase().trim() &&
        u.password === password,
    );
    if (!found) return false;
    setUser(found);
    localStorage.setItem("auth_uid", String(found.id));
    return true;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("auth_uid");
  }

  return (
    <AuthContext.Provider
      value={{ user, isAdmin: user?.role === "admin", login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthCtx {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
