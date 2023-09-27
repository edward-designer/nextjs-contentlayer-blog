"use client";

import { useLayoutEffect, useState } from "react";

export const useThemeSwitch = () => {
  const preferDarkQuery = "(prefers-color-scheme:dark)";
  const storageKey = "theme";

  const [theme, setTheme] = useState("dark");

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    toggleTheme(newTheme);
  };

  const getUserPreference = () => {
    const userPref =
      window.localStorage.getItem(storageKey) ??
      (window.matchMedia(preferDarkQuery).matches ? "dark" : "light");
    return userPref;
  };

  useLayoutEffect(() => {
    const handleChange = () => {
      const newTheme = getUserPreference();
      setTheme(newTheme);
      toggleTheme(newTheme);
    };
    handleChange();
    const mediaQuery = window.matchMedia(preferDarkQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return [theme, switchTheme];
};
