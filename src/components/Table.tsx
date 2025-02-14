import { ReactNode } from 'preact/compat';

interface Props {
  children?: ReactNode;
}

export default function Table({ children }: Props) {
  return <table className="w-100 border border-black">{children}</table>;
}
