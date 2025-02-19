import { forwardRef } from 'preact/compat';
import { JSX } from 'preact';

const Card = forwardRef<HTMLDivElement, JSX.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const componentStyle: React.CSSProperties = {
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      padding: '10px',
      borderRadius: '5px',
      cursor: props.onClick ? 'pointer' : 'default',
    };

    return (
      <div ref={ref} style={componentStyle} {...props}>
        {children}
      </div>
    );
  }
);

export default Card;
