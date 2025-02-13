const CircularProgress = ({
  progress,
  color,
}: {
  progress: number;
  color: string;
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-24 h-24 mx-auto rotate-[-90deg]" width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        className="text-gray-200"
        strokeWidth="10"
        stroke="currentColor"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-[stroke-dashoffset] duration-500"
      />
    </svg>
  );
};

const Failed = () => {
  return (
    <div className="text-center my-16">
      <div className="w-24 h-24 mx-auto relative">
        <svg
          className="absolute inset-0 m-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="bg-color-danger"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      <h2 className="text-2xl">Something went wrong</h2>
    </div>
  );
};

const SuccessIcon = () => {
  return (
    <svg
      className="absolute inset-0 m-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="bg-success"
      viewBox="0 0 16 16"
    >
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
    </svg>
  );
};

const Uploading = ({
  progress,
  pending,
}: {
  progress: number;
  pending?: boolean;
}) => {
  return (
    <div className="text-center my-16">
      <div className="w-24 h-24 mx-auto relative">
        <CircularProgress progress={progress} color="bg-success" />
        {!pending && <SuccessIcon />}
        {pending && (
          <div className="absolute inset-0 flex items-center justify-center">
            <b className="text-lg">{progress}%</b>
          </div>
        )}
      </div>
      {pending && <h2 className="text-2xl">Uploading</h2>}
      {!pending && <h2 className="text-2xl">Success</h2>}
    </div>
  );
};

interface Props {
  progress: number;
  pending?: boolean;
  failed?: boolean;
}

export default function Completed({ progress, pending, failed }: Props) {
  if (failed) {
    return <Failed />;
  }
  return <Uploading progress={progress} pending={pending} />;
}
