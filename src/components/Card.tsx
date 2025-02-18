import { CSSProperties, ReactNode, forwardRef } from 'preact/compat';

interface Props {
  children?: ReactNode;
  style?: CSSProperties;
}

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, style, ...props }, ref) => {
    const componentStyle: React.CSSProperties = {
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      padding: '10px',
      borderRadius: '5px',
      ...style,
    };

    return (
      <div ref={ref} style={componentStyle} {...props}>
        {children}
      </div>
    );
  }
);

export default Card;
