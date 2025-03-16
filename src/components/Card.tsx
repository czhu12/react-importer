import { cva } from 'cva';
import { forwardRef } from 'preact/compat';
import { ReactNode } from 'preact/compat';

interface Props {
  className?: string;
  children?: ReactNode;
  variant?: 'default' | 'gray';
}

const baseClasses = cva(
  'overflow-hidden rounded-md border border-gray-200 px-4 py-5 sm:p-6',
  {
    variants: {
      variant: {
        default: 'bg-white',
        gray: 'bg-csv-importer-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className, variant, ...props }, ref) => {
    const componentClassName = baseClasses({ variant });

    return (
      <div
        ref={ref}
        className={`${componentClassName} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Card;
