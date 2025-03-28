import { cva } from 'cva';
import { forwardRef, ReactNode } from 'preact/compat';

interface Props {
  className?: string;
  children?: ReactNode;
  variant?: 'default' | 'muted';
  withPadding?: boolean;
}

const baseClasses = cva('overflow-hidden rounded-md border border-gray-200', {
  variants: {
    variant: {
      default: 'bg-white',
      muted: 'bg-csv-importer-muted',
    },
    withPadding: {
      true: 'px-4 py-5 sm:p-6',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    withPadding: true,
  },
});

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className, variant, withPadding = true }, ref) => {
    const componentClassName = baseClasses({ variant, withPadding });

    return (
      <div ref={ref} className={`${componentClassName} ${className}`}>
        {children}
      </div>
    );
  }
);

export default Card;
