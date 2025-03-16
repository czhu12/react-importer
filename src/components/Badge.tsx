import { cva } from 'cva';
import { ReactNode } from 'preact/compat';

type BadgeVariant = 'info';

interface Props {
  children?: ReactNode;
  variant?: BadgeVariant;
}

const baseClasses = cva('inline-flex items-center rounded-md px-1.5 py-0.5', {
  variants: {
    variant: {
      info: 'bg-csv-importer-info text-xs font-medium',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

export default function Badge({ children, variant }: Props) {
  const componentClassName = baseClasses({ variant });

  return <div className={componentClassName}>{children}</div>;
}
