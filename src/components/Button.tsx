import { CSSProperties, ReactNode } from 'preact/compat';
import { useTheme } from '../theme/ThemeProvider';

interface Props {
  children?: ReactNode;
  variant?: 'primary' | 'success' | 'danger' | 'secondary' | 'warning';
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export default function Button({
  children,
  variant,
  disabled,
  outline,
  onClick,
  style,
}: Props) {
  const theme = useTheme();

  let color = theme.colors.primary;
  if (variant === 'success') {
    color = theme.colors.success;
  } else if (variant === 'danger') {
    color = theme.colors.danger;
  } else if (variant === 'secondary') {
    color = theme.colors.secondary;
  } else if (variant === 'warning') {
    color = theme.colors.warning;
  }

  if (disabled) {
    color += 'bb';
  }

  const componentStyle: React.CSSProperties = {
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '5px',
    color: outline ? color : 'white',
    border: `1px solid ${color}`,
    backgroundColor: outline ? undefined : color,
    ...style,
  };

  return (
    <div style={componentStyle} onClick={onClick}>
      {children}
    </div>
  );
}
