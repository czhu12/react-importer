import { cva } from 'cva';
import { forwardRef, ReactNode } from 'preact/compat';

interface Props {
  className?: string;
  children?: ReactNode;
  variant?: 'default' | 'muted';
}

const baseClasses = cva(
  'overflow-hidden rounded-md border border-gray-200 px-4 py-5 sm:p-6',
  {
    variants: {
      variant: {
        default: 'bg-white',
        muted: 'bg-csv-importer-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className, variant }, ref) => {
    const componentClassName = baseClasses({ variant });

    return (
      <div ref={ref} className={`${componentClassName} ${className}`}>
        {children}
      </div>
    );
  }
);

export default Card;
