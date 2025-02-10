import { CSSProperties, ReactNode } from 'preact/compat';

interface Props {
  children?: ReactNode;
  flex?: CSSProperties['flex'];
  verticallyCenter?: boolean;
  spaceBetween?: boolean;
}

export default function Col({
  children,
  flex,
  verticallyCenter,
  spaceBetween,
}: Props) {
  const componentStyle: React.CSSProperties = {
    flex: flex ?? 1,
    display: verticallyCenter || spaceBetween ? 'flex' : undefined,
    alignItems: verticallyCenter ? 'center' : undefined,
    justifyContent: spaceBetween ? 'space-between' : undefined,
  };

  return <div style={componentStyle}>{children}</div>;
}
