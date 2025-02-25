interface Props {
  tooltipText: string;
}

export default function Tooltip({ tooltipText }: Props) {
  return (
    <div className="absolute top-full left-1/2 z-20 hidden w-max -translate-x-1/2 transform rounded-md bg-gray-900 px-3 py-2 text-xs text-white shadow-lg group-focus-within:block group-hover:block">
      {tooltipText}
      <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-gray-900"></div>
    </div>
  );
}
