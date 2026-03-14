import { useState, useCallback } from "react";

export type View =
  | "home"
  | "courses"
  | "profile"
  | "support"
  | "admin"
  | "courseDetail";

export function useNav(initial: View = "home") {
  const [view, setView] = useState<View>(initial);
  const [courseId, setCourseId] = useState<number | null>(null);
  const [prevView, setPrevView] = useState<View>(initial);

  const navigate = useCallback((next: View, id?: number) => {
    setView((cur) => {
      setPrevView(cur);
      return next;
    });
    if (id !== undefined) setCourseId(id);
  }, []);

  const goBack = useCallback(() => {
    setView(prevView);
    setCourseId(null);
  }, [prevView]);

  return { view, courseId, navigate, goBack };
}
