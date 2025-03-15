import { forwardRef } from 'preact/compat';
import { JSX } from 'preact';

const Card = forwardRef<HTMLDivElement, JSX.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`overflow-hidden rounded-md border border-gray-200 bg-white px-4 py-5 sm:p-6 ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Card;
