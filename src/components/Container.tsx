import { CSSProperties, ReactNode } from 'preact/compat';

interface Props {
  children?: ReactNode;
}

export default function Container({ children }: Props) {
  const componentStyle: CSSProperties = {
    margin: '0 auto',
    maxWidth: '1200px',
  };

  return <div style={componentStyle}>{children}</div>;
}
