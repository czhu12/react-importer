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

const buttonStyles = cva('text-center inline-block font-bold', {
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
      xs: 'px-2 py-2.5 rounded-sm text-sm',
      sm: 'px-2.5 py-3 rounded-md',
      md: 'px-3 py-3.5 rounded-md',
      lg: 'px-3.5 py-4 rounded-md',
      xl: 'px-4 py-4.5 rounded-md',
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
        'hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700',
    },
    {
      variant: 'secondary',
      disabled: false,
      className: 'hover:bg-sky-50',
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
        'hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500',
    },
    {
      variant: 'danger',
      disabled: false,
      className:
        'hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600',
    },
    {
      variant: 'warning',
      disabled: false,
      className:
        'hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600',
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
    disabled: false,
  },
});

export default function Button2({
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
