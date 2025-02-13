export interface ImporterTheme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    success: string;
    danger: string;
    info: string;
    warning: string;
  };
  theme: ThemeVariant;
}

export type ThemeVariant = 'default' | 'theme-1' | 'theme-2';
