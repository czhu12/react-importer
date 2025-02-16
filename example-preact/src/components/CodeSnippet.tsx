export default function CodeSnippet({
  title,
  code,
}: {
  title: string;
  code: string;
}) {
  return (
    <div className="max-w-lg overflow-x-auto">
      <h3 className="my-5 text-white bg-black text-center text-2xl">{title}</h3>
      <pre><code>{code}</code></pre>
    </div>
  );
};