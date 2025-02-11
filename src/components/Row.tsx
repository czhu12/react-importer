import { ReactNode } from 'preact/compat';

interface Props {
  children?: ReactNode;
}

export default function Row({ children }: Props) {
  return <div className="flex flex-row">{children}</div>;
}
