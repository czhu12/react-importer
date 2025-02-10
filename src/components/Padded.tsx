import { CSSProperties, ReactNode } from 'preact/compat';

interface Props {
  padding: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export default function Padded({ padding, style, children }: Props) {
  const componentStyle: React.CSSProperties = {
    padding,
    ...style,
  };

  return <div style={componentStyle}>{children}</div>;
}
