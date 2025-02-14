import { cva } from 'cva';
import { CSSProperties, ReactNode } from 'preact/compat';

interface Props {
  children?: ReactNode;
  variant?:
    | 'primary'
    | 'success'
    | 'danger'
    | 'secondary'
    | 'warning'
    | 'tertiary';
  outline?: boolean;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  style?: CSSProperties;
}

const buttonStyles = cva('text-center inline-block font-semibold', {
  variants: {
    variant: {
      primary: 'shadow-xs bg-primary text-white',
      secondary:
        'bg-white text-primary ring-1 shadow-xs ring-bg-primary ring-inset',
      tertiary:
        'bg-white text-gray-500 ring-1 shadow-xs ring-gray-300 ring-inset',
      success: 'shadow-xs bg-success text-white',
      danger: 'shadow-xs bg-danger text-white',
      warning: 'shadow-xs bg-warning text-white',
    },
    size: {
      xs: 'px-2 py-1 rounded-sm text-xs',
      sm: 'px-2 py-1 rounded-sm text-sm',
      md: 'px-2.5 p1.5 rounded-md text-sm',
      lg: 'px-3 py-2 rounded-md text-sm',
      xl: 'px-3.5 py-2.5 rounded-md text-sm',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
      false: 'cursor-pointer',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      disabled: false,
      className:
        'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    },
    {
      variant: 'secondary',
      disabled: false,
      className: 'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
    },
    {
      variant: 'tertiary',
      disabled: false,
      className: 'hover:bg-gray-50',
    },
    {
      variant: 'success',
      disabled: false,
      className:
        'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success',
    },
    {
      variant: 'danger',
      disabled: false,
      className:
        'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger',
    },
    {
      variant: 'warning',
      disabled: false,
      className:
        'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:opacity-80',
    },
  ],
  defaultVariants: {
    size: 'lg',
    variant: 'primary',
    disabled: false,
  },
});

export default function Button({
  children,
  variant,
  disabled,
  onClick,
  size,
}: Props) {
  const componentClassName = buttonStyles({ variant, disabled, size });

  return (
    <div className={componentClassName} onClick={onClick}>
      {children}
    </div>
  );
}
