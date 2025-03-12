"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { StaticThemeButton, ThemeButton } from "./theme-button";

export const ThemeButtons = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  interface ThemeOption {
    id: string;
    label: string;
  }

  const themes: ThemeOption[] = [
    { id: "light", label: "Light Mode" },
    { id: "dark", label: "Dark Mode" },
    { id: "custom", label: "Custom Mode" },
    { id: "pastel", label: "Pastel Mode" },
  ];
  // Prevent hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect system preference on initial load
  useEffect(() => {
    if (mounted && !theme) {
      // If no theme is set, use system preference
      const systemTheme =
        resolvedTheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      setTheme(systemTheme);
    }
  }, [mounted, theme, resolvedTheme, setTheme]);

  // Return a non-conditional version during server-side rendering
  if (!mounted) {
    return (
      <div className="flex space-x-2">
        {themes.map((themeOption: ThemeOption) => (
          <StaticThemeButton key={themeOption.id} label={themeOption.label} />
        ))}
      </div>
    );
  }

  // Use resolvedTheme to get the actual theme being applied (including system preference)
  const effectiveTheme = resolvedTheme || theme;

  return (
    <div className="flex space-x-2">
      {themes.map((themeOption: ThemeOption) => (
        <ThemeButton
          key={themeOption.id}
          themeName={themeOption.id}
          currentTheme={effectiveTheme}
          onClick={() => setTheme(themeOption.id)}
          label={themeOption.label}
        />
      ))}
    </div>
  );
};
