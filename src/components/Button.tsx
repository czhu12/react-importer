import { cva } from 'cva';
import { CSSProperties, ReactNode } from 'preact/compat';
import { twMerge } from 'tailwind-merge';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'danger'
  | 'warning';

interface Props {
  children?: ReactNode;
  variant?: ButtonVariant;
  outline?: boolean;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}

const baseClasses = cva('text-center inline-block font-semibold', {
  variants: {
    variant: {
      primary: 'shadow-xs bg-primary text-white',
      secondary:
        'bg-white text-primary ring-1 shadow-xs ring-bg-primary ring-inset',
      tertiary:
        'bg-white text-gray-900 ring-1 shadow-xs ring-tertiary ring-inset',
      success: 'shadow-xs bg-success text-white',
      danger: 'shadow-xs bg-danger text-white',
      warning: 'shadow-xs bg-warning text-white',
    },
    size: {
      xs: 'px-2 py-1 rounded-sm text-xs',
      sm: 'px-2 py-1 rounded-sm text-sm',
      md: 'px-2.5 py-1.5 rounded-md text-sm',
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
        'hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    },
    {
      variant: 'secondary',
      disabled: false,
      className:
        'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
    },
    {
      variant: 'tertiary',
      disabled: false,
      className: 'hover:bg-tertiary-light',
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
        'hover:bg-danger-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger',
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
  className,
}: Props) {
  const componentClassName = twMerge(
    baseClasses({ variant, disabled, size }),
    className
  );

  return (
    <div className={componentClassName} onClick={onClick}>
      {children}
    </div>
  );
}
