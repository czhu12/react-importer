import 'tippy.js/dist/tippy.css'; // optional for styling
import tippy from 'tippy.js';
import { CloudArrowUpIcon, TableCellsIcon } from '@heroicons/react/24/outline';
import { GitHubIcon } from './Icons';
import rainbow from '../assets/images/rainbow.jpg';

export default function Header() {
  return (
    <div
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${rainbow})`,
        overflow: 'hidden',
        clipPath: 'polygon(0 0, 100% 0%, 115% 85%, 0 100%)',
      }}
    >
      <div className="relative bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0)] py-4 font-semibold text-white">
        <div className="mx-auto mt-4 flex max-w-6xl flex-row justify-between px-4">
          <div className="rubik flex flex-row items-center gap-2">
            <TableCellsIcon className="size-6" />
            OneImport
          </div>
          <a
            href="https://github.com/HelloCSV/hello-csv"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="size-8 hover:text-gray-300" />
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col px-4 pt-24 pb-32 lg:!flex-row">
        <div>
          <div className="rubik mb-6 text-5xl font-bold tracking-tighter sm:text-7xl">
            A Sleek CSV Importer
          </div>
          <div className="mb-6 text-lg/9">
            ✓ Finally, a CSV importer that just works.
            <br />
            ✓ No more custom scripts to handle complex CSV files.
            <br />
            {`✓ Drop it into any app, even if you don't use React.`}
            <br />
            ✓ Beautiful, customizable UI, with sensible defaults.
            <br />
            ✓ Fully supports multiple languages for a seamless experience.
            <br />✓ Only ~130KB gzipped.
          </div>

          <div className="mb-12 flex cursor-pointer">
            <button
              className="cursor-pointer rounded-md bg-slate-800 px-4 py-4 text-sm text-white"
              onClick={(e) => {
                navigator.clipboard.writeText('npm install hello-csv');
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
                <code>$ npm install hello-csv</code>
              </pre>
            </button>
          </div>
          <div className="flex">
            {/* TODO: Once we get the modal working, we will have this open the importer in a modal */}
            <button
              type="button"
              className="text-md mr-3 cursor-pointer rounded-full px-4 py-2.5 font-semibold text-white ring-1 shadow-xs ring-gray-300 ring-inset hover:opacity-80"
            >
              Demo ❯
            </button>
            <a
              className="text-md px-4 py-2.5"
              href="https://github.com/HelloCSV/hello-csv"
              target="_blank"
              rel="noreferrer"
            >
              Documentation ❯
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 flex h-[300px] w-[300px] cursor-pointer flex-col items-center justify-center rounded-[2rem] bg-white p-4 text-center text-black shadow-2xl transition-all duration-300 hover:bg-gray-100 lg:mt-0">
          {/* TODO:Embed a video here once we have one but until then, once we get the modal working, we will have this open the importer in a modal */}
          <CloudArrowUpIcon className="size-10 text-gray-500" />
          <h3 className="mt-3 text-3xl font-bold">Try it out!</h3>
          <div className="text-md mt-3">Import a CSV file in seconds</div>
        </div>
      </div>
    </div>
  );
}
