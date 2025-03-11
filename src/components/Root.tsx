import { ReactNode, forwardRef, useEffect } from 'preact/compat';

interface Props {
  children?: ReactNode;
}

export default forwardRef<HTMLDivElement, Props>(function Root(
  { children },
  ref
) {
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            (node as HTMLElement).id === 'headlessui-portal-root'
          ) {
            (node as HTMLElement).classList.add('csv-importer');
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: false });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="csv-importer">
      {children}
    </div>
  );
});
