import { ReactNode, forwardRef, useEffect } from 'preact/compat';
import { HEALDESS_UI_PORTAL_ROOT_ID, ROOT_CLASS } from '../constants';

interface Props {
  children?: ReactNode;
  className?: string;
}

export default forwardRef<HTMLDivElement, Props>(function Root(
  { children, className },
  ref
) {
  useEffect(() => {
    /// We need to add a class to the portal root to style the dropdown
    /// that is because we have our css scoped to componenents within element with class csv-importer
    ///
    /// HeadlesUI doesn't seem to provide an API to manipulate Portal root, so we do it this hacky way
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            (node as HTMLElement).id === HEALDESS_UI_PORTAL_ROOT_ID
          ) {
            (node as HTMLElement).classList.add(ROOT_CLASS);
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: false });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${ROOT_CLASS} min-h-0 w-full bg-white p-6 overflow-auto${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
});
