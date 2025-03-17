import { ReactNode } from 'preact/compat';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface Props {
  children: ReactNode;
}

export default function Alert({ children }: Props) {
  return (
    <div className="bg-csv-importer-primary-extra-light rounded-md p-4">
      <div className="flex">
        <div className="shrink-0">
          <InformationCircleIcon
            aria-hidden="true"
            className="text-csv-importer-primary size-5"
          />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
}
