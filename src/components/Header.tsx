import { CSSProperties, ReactNode } from 'preact/compat';
import { useTheme } from '../theme/ThemeProvider';

function TextEnd({ children, id }: { children?: ReactNode; id: string }) {
  return (
    <section id={id} style={{ textAlign: 'right', marginBottom: '20px' }}>
      {children}
    </section>
  );
}

function BreadcrumbItem({
  active,
  past,
  children,
  onClick,
}: {
  children?: ReactNode;
  active?: boolean;
  past?: boolean;
  onClick: () => void;
}) {
  const theme = useTheme();

  const computedStyle: CSSProperties = {
    fontWeight: active ? 'bold' : past ? 'bold' : 'lighter',
    marginLeft: '20px',
    ...(past && {
      color: theme.colors.success,
      cursor: 'pointer',
    }),
  };

  return (
    <span style={computedStyle} onClick={onClick}>
      {children}
    </span>
  );
}

function RightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="grey"
      viewBox="0 0 16 16"
      style={{ marginLeft: '20px' }}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
}

function Header<T>({
  steps,
  currentStep,
  onClick,
}: {
  steps: readonly T[];
  currentStep: number;
  onClick: (step: T) => void;
}) {
  return (
    <TextEnd id="csv-importer-nav-header">
      {steps.map((step, index) => {
        const past = currentStep > index;
        const active = currentStep === index;
        const last = index === steps.length - 1;
        return (
          <BreadcrumbItem
            key={index}
            past={past}
            active={active}
            onClick={() => onClick(step)}
          >
            {`${step}`}
            {!last && <RightIcon />}
          </BreadcrumbItem>
        );
      })}
    </TextEnd>
  );
}

export default Header;
