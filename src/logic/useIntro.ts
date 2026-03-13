import { useCallback, useEffect, useState } from "react";

export function useIntro(duration = 4000) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const tExit = setTimeout(() => setExiting(true), duration - 800);
    const tHide = setTimeout(() => setVisible(false), duration);
    return () => {
      clearTimeout(tExit);
      clearTimeout(tHide);
    };
  }, [duration]);

  const skip = useCallback(() => {
    setExiting(true);
    setTimeout(() => setVisible(false), 750);
  }, []);

  return { visible, exiting, skip };
}
