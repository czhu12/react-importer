import { ReactNode, useEffect } from 'preact/compat';
import { ThemeVariant } from '../types';

interface ThemeProviderProps {
  theme?: ThemeVariant;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    } else {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
      }
    }
  }, [theme]);

  return (
    <>{children}</>
  );
};
