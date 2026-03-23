"use client";

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getTimeBasedTheme(): Theme {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6 ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const isManualRef = useRef(false);

  // 초기 테마 설정
  useEffect(() => {
    const saved = localStorage.getItem("theme-manual");
    if (saved === "light" || saved === "dark") {
      isManualRef.current = true;
      setTheme(saved);
      applyTheme(saved);
    } else {
      const timeTheme = getTimeBasedTheme();
      setTheme(timeTheme);
      applyTheme(timeTheme);
    }

    // 매 분마다 시간 체크 (수동 설정이 아닐 때만 적용)
    const interval = setInterval(() => {
      if (isManualRef.current) return;
      const timeTheme = getTimeBasedTheme();
      setTheme(timeTheme);
      applyTheme(timeTheme);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      isManualRef.current = true;
      applyTheme(next);
      localStorage.setItem("theme-manual", next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
