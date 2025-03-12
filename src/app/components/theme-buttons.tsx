"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeButtonProps {
  themeName: string;
  currentTheme: string | undefined;
  onClick: () => void;
  label: string;
}

interface StaticThemeButtonProps {
  label: string;
}

const ThemeButton = ({
  themeName,
  currentTheme,
  onClick,
  label,
}: ThemeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-colors ${
        currentTheme === themeName
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      }`}
    >
      {label}
    </button>
  );
};

const StaticThemeButton = ({ label }: StaticThemeButtonProps) => {
  return (
    <button className="flex items-center cursor-pointer px-4 py-2 rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
      {label}
    </button>
  );
};

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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !theme) {
      const systemTheme =
        resolvedTheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      setTheme(systemTheme);
    }
  }, [mounted, theme, resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <div className="flex flex-col gap-4">
        {themes.map((themeOption: ThemeOption) => (
          <StaticThemeButton key={themeOption.id} label={themeOption.label} />
        ))}
      </div>
    );
  }

  const effectiveTheme = resolvedTheme || theme;

  return (
    <div className="flex flex-col gap-4">
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
