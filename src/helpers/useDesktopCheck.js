import { useEffect, useState } from "react";

export default function useDesktopCheck() {
  const [isOnDesktop, setIsOnDesktop] = useState(false);

  const isWindowBiggerThan1024 = () => {
    if (typeof window !== "undefined") {
      setIsOnDesktop(window?.innerWidth > 1024);
    }
  };

  useEffect(() => {
    isWindowBiggerThan1024();
    window.addEventListener("resize", isWindowBiggerThan1024);
    return () => window.removeEventListener("resize", isWindowBiggerThan1024);
  }, []);

  return isOnDesktop;
}
