import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';

export default function CodeBlock({
  title,
  code,
}: {
  title: string;
  code: string;
}) {
  hljs.registerLanguage('javascript', javascript);

  return (
    <>
      <h3 className="rubik text-4xl font-bold">{title}</h3>
      <pre className="max-h-[550px] overflow-auto rounded-lg bg-slate-800 p-8 text-xs text-white">
        <code
          className="language-javascript"
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(code, { language: 'jsx' }).value,
          }}
        />
      </pre>
    </>
  );
}
