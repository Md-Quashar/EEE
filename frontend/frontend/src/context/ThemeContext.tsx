import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '@/lib/theme';
import type { ThemeTokens } from '@/types';

interface ThemeContextType {
  dark: boolean;
  toggle: () => void;
  t: ThemeTokens;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setDark(true);
  }, []);

  const toggle = () => {
    setDark(!dark);
    localStorage.setItem('theme', !dark ? 'dark' : 'light');
  };

  const t = dark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ dark, toggle, t }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};