import 'tippy.js/dist/tippy.css'; // optional for styling
import tippy from 'tippy.js';

import { TableCellsIcon } from './Icons';
export default function Header() {
  return (
    <div className="text-white bg-cover bg-center" style={{
      backgroundImage: "url('/images/backdrops/rainbow.jpg')",
      overflow: 'hidden',
      clipPath: 'polygon(0 0, 100% 0%, 115% 85%, 0 100%)',
    }}>
      <div
        className="py-4 relative font-semibold text-white bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0)]"
      >
        <div className="px-4 mx-auto flex flex-row justify-between max-w-6xl">
          <div className="flex flex-row items-center gap-2 rubik">
            <TableCellsIcon />
            React Importer
          </div>
          <iframe src="https://ghbtns.com/github-btn.html?user=czhu12&repo=react-importer&type=star&count=true" width="150" height="20" title="GitHub"></iframe>
        </div>
      </div>
      <div className="px-4 mx-auto pt-32 pb-32 flex flex-col lg:flex-row max-w-6xl">
        <div>
          <div className="text-5xl sm:text-7xl mb-6 tracking-tighter rubik font-bold">
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
            <br />
            ✓ Only 35kb gzipped.
          </div>

          <div className="cursor-pointer flex">
            <button
              className="bg-slate-800 text-white px-4 py-4 rounded-md cursor-pointer"
              onClick={(e) => {
                navigator.clipboard.writeText('npm install react-importer');
                tippy(e.currentTarget as HTMLElement, {
                  showOnCreate: true,
                  onHidden: (instance) => {
                    instance.destroy()
                  },
                  content: 'Copied!',
                  placement: 'top',
                });
              }}
            >
              <pre><code>$ npm install react-importer</code></pre>
            </button>
          </div>
          <div className="flex mt-4">
            <a className="text-sm" href="https://github.com/czhu12/react-importer">Documentation ❯</a>
          </div>
        </div>

        <div className="shadow-2xl h-[300px] w-[300px] flex flex-col mx-auto mt-10 lg:mt-0 justify-center items-center bg-white text-black rounded-[2rem] p-4 cursor-pointer text-center hover:bg-gray-100 transition-all duration-300">
          <h3 className="text-2xl font-bold">TODO</h3>
          <div className="text-lg">Show something useful here. Either a video or a demo.</div>
        </div>
      </div>
    </div>
  );
};