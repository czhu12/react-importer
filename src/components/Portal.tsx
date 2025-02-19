import { createPortal } from 'preact/compat';

export default function Portal({ children }: { children: React.ReactNode }) {
  const modalRoot = document.body;

  return createPortal(children, modalRoot);
}
