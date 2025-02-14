import { ReactNode, useEffect } from 'preact/compat';
import { ThemeVariant } from '../types';

interface ThemeSetterProps {
  theme?: ThemeVariant;
  children: ReactNode;
}

export const ThemeSetter: React.FC<ThemeSetterProps> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('csv-importer-data-theme', theme);
    }
  }, [theme]);

  return <>{children}</>;
};
