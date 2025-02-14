import { CSSProperties, ReactNode } from 'preact/compat';
import { useTheme } from '../theme/ThemeProvider';

interface Props {
  children?: ReactNode;
  bold?: boolean;
  danger?: boolean;
  muted?: boolean;
  style?: CSSProperties;
}

export default function TextStyled({
  muted,
  danger,
  bold,
  children,
  style,
}: Props) {
  const theme = useTheme();

  const componentStyle: CSSProperties = {
    color: danger
      ? theme.colors.danger
      : muted
        ? theme.colors.secondary
        : undefined,
    fontWeight: bold ? 'bold' : undefined,
    ...style,
  };

  return <div style={componentStyle}>{children}</div>;
}
