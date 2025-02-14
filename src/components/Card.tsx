import { CSSProperties, ReactNode } from 'preact/compat';

interface Props {
  children?: ReactNode;
  style?: CSSProperties;
}

export default function Card({ children, style, ...props }: Props) {
  const componentStyle: React.CSSProperties = {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    padding: '10px',
    borderRadius: '5px',
    ...style,
  };

  return (
    <div style={componentStyle} {...props}>
      {children}
    </div>
  );
}
