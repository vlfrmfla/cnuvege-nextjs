"use client";

import { useEffect } from "react";

function getTimeBasedTheme(): "light" | "dark" {
  const hour = new Date().getHours();
  // 6pm (18:00) ~ 6am (06:00) = dark mode
  return hour >= 18 || hour < 6 ? "dark" : "light";
}

function applyTheme(theme: "light" | "dark") {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 초기 테마 설정
    applyTheme(getTimeBasedTheme());

    // 매 분마다 시간 체크 (자동 전환용)
    const interval = setInterval(() => {
      applyTheme(getTimeBasedTheme());
    }, 60000); // 1분마다 체크

    return () => clearInterval(interval);
  }, []);

  return <>{children}</>;
}
