import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

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
      <pre className="max-h-120 overflow-auto rounded-lg bg-slate-800 p-4 text-white">
        <code
          className="language-javascript text-sm"
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(code, { language: 'jsx' }).value,
          }}
        />
      </pre>
    </>
  );
}
