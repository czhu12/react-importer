import 'tippy.js/dist/tippy.css'; // optional for styling
import tippy from 'tippy.js';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

import { TableCellsIcon } from './Icons';

export default function Header({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) {
  return (
    <div
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/backdrops/rainbow.jpg')",
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0%, 115% 85%, 0 100%)',
      }}
    >
      <div className="relative bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0)] py-4 font-semibold text-white">
        <div className="mx-auto flex max-w-6xl flex-row justify-between px-4">
          <div className="rubik flex flex-row items-center gap-2">
            <TableCellsIcon />
            OneImport
          </div>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=czhu12&repo=react-importer&type=star&count=true"
            width="150"
            height="20"
            title="GitHub"
          ></iframe>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col px-4 pt-32 pb-32 lg:flex-row">
        <div>
          <div className="rubik mb-6 text-5xl font-bold tracking-tighter sm:text-7xl">
            A Sleek CSV Importer
          </div>
          <div className="mb-12 text-lg">
            ✓ Finally, a CSV importer that just works.
            <br />
            ✓ No more custom scripts to handle complex CSV files.
            <br />
            ✓ Drop it into any app, even if you don't use React.
            <br />
            ✓ Beautiful, customizable UI, with sensible defaults.
            <br />✓ Only ~130KB gzipped.
          </div>

          <div className="flex cursor-pointer">
            <button
              className="cursor-pointer rounded-md bg-slate-800 px-4 py-4 text-white"
              onClick={(e) => {
                navigator.clipboard.writeText('npm install react-importer');
                tippy(e.currentTarget as HTMLElement, {
                  showOnCreate: true,
                  onHidden: (instance) => {
                    instance.destroy();
                  },
                  content: 'Copied!',
                  placement: 'top',
                });
              }}
            >
              <pre>
                <code>$ npm install react-importer</code>
              </pre>
            </button>
          </div>
          <div className="mt-4 flex pt-4">
            <button
              type="button"
              className="text-md mr-3 cursor-pointer rounded-full px-4 py-2.5 font-semibold text-white ring-1 shadow-xs ring-gray-300 ring-inset hover:opacity-80"
              onClick={() => {
                setOpen(true);
              }}
            >
              Demo ❯
            </button>
            <a
              className="text-md px-4 py-2.5"
              href="https://github.com/czhu12/react-importer"
              target="_blank"
            >
              Documentation ❯
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 flex h-[300px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-[2rem] bg-white p-4 text-center text-black shadow-2xl transition-all duration-300 hover:bg-gray-100 lg:mt-0">
          {/* Embed a video here once we have one */}
          <CloudArrowUpIcon className="size-10 text-gray-500" />
          <h3 className="mt-3 text-3xl font-bold">Try it out!</h3>
          <div className="text-md mt-3">Import a CSV file in seconds</div>
        </div>
      </div>
    </div>
  );
}
