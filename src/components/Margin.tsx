import { CSSProperties, ReactNode } from 'preact/compat';

interface Props {
  margin: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export default function Margin({ margin, style, children }: Props) {
  const componentStyle: React.CSSProperties = {
    margin,
    ...style,
  };

  return <div style={componentStyle}>{children}</div>;
}
