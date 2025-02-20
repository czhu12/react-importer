import 'tippy.js/dist/tippy.css'; // optional for styling
import tippy from 'tippy.js';
import { CloudArrowUpIcon, TableCellsIcon } from '@heroicons/react/24/outline';

export default function Header() {
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
        <div className="mx-auto mt-4 flex max-w-6xl flex-row justify-between px-4">
          <div className="rubik flex flex-row items-center gap-2">
            <TableCellsIcon className="size-6" />
            OneImport
          </div>
          <a href="https://github.com/czhu12/react-importer" target="_blank">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="size-8 hover:text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col px-4 pt-24 pb-32 lg:flex-row">
        <div>
          <div className="rubik mb-6 text-5xl font-bold tracking-tighter sm:text-7xl">
            A Sleek CSV Importer
          </div>
          <div className="mb-6 text-lg/9">
            ✓ Finally, a CSV importer that just works.
            <br />
            ✓ No more custom scripts to handle complex CSV files.
            <br />
            ✓ Drop it into any app, even if you don't use React.
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
              href="https://github.com/czhu12/react-importer"
              target="_blank"
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
