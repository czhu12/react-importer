import React, { createContext, ReactNode, useContext } from 'react';
import { ImporterTheme } from '../types';
import { THEME_DEFAULT } from './themes';

const ThemeContext = createContext<ImporterTheme>(THEME_DEFAULT);

interface ThemeProviderProps {
  theme?: ImporterTheme;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = THEME_DEFAULT,
  children,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
