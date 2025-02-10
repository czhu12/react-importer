import { ReactNode } from 'preact/compat';

interface Props {
  right?: boolean;
  center?: boolean;
  children?: ReactNode;
}

export default function Align({ right, center, children }: Props) {
  const componentStyle: React.CSSProperties = {
    textAlign: right ? 'right' : center ? 'center' : 'initial',
  };

  return <div style={componentStyle}>{children}</div>;
}
