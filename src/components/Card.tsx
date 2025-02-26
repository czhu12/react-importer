import { forwardRef } from 'preact/compat';
import { JSX } from 'preact';

const Card = forwardRef<HTMLDivElement, JSX.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, onClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`${className} overflow-hidden rounded-md border border-gray-300 bg-white ${onClick ? 'cursor-pointer' : ''}`}
        {...props}
      >
        <div className="px-4 py-5 sm:p-6">{children}</div>
      </div>
    );
  }
);

export default Card;
