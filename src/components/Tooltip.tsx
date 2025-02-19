import { cva } from 'cva';
import { ReactNode } from 'preact/compat';

type Variant = 'error' | 'info';

interface Props {
  variant?: Variant;
  children?: ReactNode;
  tooltipText?: string;
}

const tooltipBaseClasses = cva(
  'bg-gray-50 text-gray-900 absolute outline outline-t-0 top-full w-full whitespace-normal z-20 mb-2 hidden px-2 py-4 text-xs group-focus-within:block group-hover:block',
  {
    variants: {
      variant: {
        error: 'outline-danger',
        info: 'outline-gray-500',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const tooltipWrapperBaseClassesWithoutOutline = 'group relative h-full w-full';

const tooltipWrapperBaseClasses = cva(
  `${tooltipWrapperBaseClassesWithoutOutline} focus-within:outline focus-within:outline-b-0  hover:outline hover:outline-b-0`,
  {
    variants: {
      variant: {
        error: 'focus-within:outline-danger hover:outline-danger',
        info: 'focus-within:outline-gray-500 hover:outline-gray-500',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export default function Tooltip({ variant, children, tooltipText }: Props) {
  const tooltipClassName = tooltipBaseClasses({ variant });
  const tooltipWrapperClassName = tooltipWrapperBaseClasses({ variant });

  // Add tabIndex to make the tooltip focusable
  return (
    <div
      className={
        tooltipText
          ? tooltipWrapperClassName
          : tooltipWrapperBaseClassesWithoutOutline
      }
      tabIndex={0}
    >
      {children}
      {tooltipText && <span className={tooltipClassName}>{tooltipText}</span>}
    </div>
  );
}
