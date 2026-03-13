import { useState, useCallback } from "react";

export type View = "home" | "courses" | "profile" | "support" | "admin";

export function useNav(initial: View = "home") {
  const [view, setView] = useState<View>(initial);

  const navigate = useCallback((next: View) => {
    setView(next);
  }, []);

  return { view, navigate };
}
