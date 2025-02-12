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
      primary: 'shadow-xs bg-sky-700  text-white',
      secondary:
        'bg-white text-sky-700 ring-1 shadow-xs ring-sky-700 ring-inset',
      tertiary:
        'bg-white text-gray-500 ring-1 shadow-xs ring-gray-300 ring-inset',
      success: 'shadow-xs bg-emerald-500 text-white',
      danger: 'shadow-xs bg-red-600 text-white',
      warning: 'shadow-xs bg-orange-600 text-white',
    },
    size: {
      xs: 'px-2 py-1 rounded-sm',
      sm: 'px-2.5 py-1.5 rounded-md',
      md: 'px-3 py-2 rounded-md',
      lg: 'px-3.5 py-2.5 rounded-md',
      xl: 'px-4 py-3 rounded-md',
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
      className: 'hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600',
    },
  ],
  defaultVariants: {
    size: 'lg',
    variant: 'primary',
    disabled: false,
  },
});

export default function Button2({
  children,
  variant,
  disabled,
  onClick,
  style,
  size,
}: Props) {
  const componentClassName = buttonStyles({ variant, disabled, size });

  return (
    <div className={componentClassName} style={style} onClick={onClick}>
      {children}
    </div>
  );
}
