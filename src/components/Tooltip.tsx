import { cva } from 'cva';
import { ReactNode } from 'preact/compat';

interface Props {
  tooltipText: string;
  children: ReactNode;
  className?: string;
  hidden?: boolean;
}

const baseClasses = cva(
  'absolute top-full left-1/2 z-20 hidden w-max -translate-x-1/2 translate-y-3 transform rounded-md bg-gray-900 px-3 py-2 text-xs text-white shadow-lg ',
  {
    variants: {
      hidden: {
        true: 'hidden',
        false: 'group-focus-within:block group-hover:block',
      },
    },
  }
);
export default function Tooltip({
  tooltipText,
  children,
  className,
  hidden = false,
}: Props) {
  const componentClassName = baseClasses({ hidden });

  return (
    <div className={`${className} group relative`}>
      {children}
      <div className={componentClassName}>
        {tooltipText}
        <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-gray-900"></div>
      </div>
    </div>
  );
}
