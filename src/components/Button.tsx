import { cva } from 'cva';
import { CSSProperties, ReactNode } from 'preact/compat';

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
  shape?: 'default' | 'circle';
}

const baseClasses = cva('text-center inline-block font-semibold', {
  variants: {
    variant: {
      primary: 'shadow-xs bg-csv-importer-primary text-white',
      secondary:
        'bg-white text-csv-importer-primary ring-1 shadow-xs ring-bg-csv-importer-primary ring-inset',
      tertiary:
        'bg-white text-gray-900 ring-1 shadow-xs ring-csv-importer-tertiary ring-inset',
      success: 'shadow-xs bg-csv-importer-success text-white',
      danger: 'shadow-xs bg-csv-importer-danger text-white',
      warning: 'shadow-xs bg-csv-importer-warning text-white',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-sm',
      xl: 'text-sm',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
      false: 'cursor-pointer',
    },
    shape: {
      circle: 'rounded-full',
      default: '',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      disabled: false,
      className:
        'hover:bg-csv-importer-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-csv-importer-primary',
    },
    {
      variant: 'secondary',
      disabled: false,
      className:
        'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-csv-importer-secondary',
    },
    {
      variant: 'tertiary',
      disabled: false,
      className: 'hover:bg-csv-importer-tertiary-light',
    },
    {
      variant: 'success',
      disabled: false,
      className:
        'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-csv-importer-success',
    },
    {
      variant: 'danger',
      disabled: false,
      className:
        'hover:bg-csv-importer-danger-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-csv-importer-danger',
    },
    {
      variant: 'warning',
      disabled: false,
      className:
        'hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:opacity-80',
    },
    { size: 'xs', shape: 'circle', className: 'p-1' },
    { size: 'sm', shape: 'circle', className: 'p-1.5' },
    { size: 'md', shape: 'circle', className: 'p-2' },
    { size: 'lg', shape: 'circle', className: 'p-2.5' },
    { size: 'xl', shape: 'circle', className: 'p-3' },
    { size: 'xs', shape: 'default', className: 'px-2 py-1 rounded-sm' },
    { size: 'sm', shape: 'default', className: 'px-2 py-1 rounded-sm' },
    {
      size: 'md',
      shape: 'default',
      className: 'px-2.5 py-1.5 rounded-md',
    },
    {
      size: 'lg',
      shape: 'default',
      className: 'px-3 py-2 rounded-md',
    },
    {
      size: 'xl',
      shape: 'default',
      className: 'px-3.5 py-2.5 rounded-md',
    },
  ],
  defaultVariants: {
    size: 'lg',
    variant: 'primary',
    disabled: false,
    shape: 'default',
  },
});

export default function Button({
  children,
  variant,
  disabled,
  onClick,
  size,
  shape,
}: Props) {
  const componentClassName = baseClasses({ variant, disabled, size, shape });

  return (
    <div className={componentClassName} onClick={onClick}>
      {children}
    </div>
  );
}
