import { ReactNode } from 'preact/compat';
import { XCircleIcon } from '@heroicons/react/24/outline';

interface Props {
  children: ReactNode;
}

export default function Error({ children }: Props) {
  return (
    <div className="flex">
      <div className="shrink-0">
        <XCircleIcon
          aria-hidden="true"
          className="text-csv-importer-danger size-5"
        />
      </div>
      <div className="ml-3 flex-1 md:flex md:justify-between">
        <p className="text-csv-importer-danger text-sm">{children}</p>
      </div>
    </div>
  );
}
