import { forwardRef, PropsWithoutRef, ReactNode } from 'preact/compat';

interface Props {
  value: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
  placeholder?: string;
  iconBuilder?: (props: PropsWithoutRef<ReactNode>) => ReactNode;
  classes?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, onBlur, onChange, placeholder, iconBuilder, classes }, ref) => {
    return (
      <div className="grid grid-cols-1">
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) =>
            onChange?.((e.target as HTMLInputElement)?.value ?? '')
          }
          className={`${classes} ${iconBuilder != null ? 'pl-10' : ''} focus:outline-primary col-start-1 row-start-1 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
          onBlur={(e) => onBlur?.((e.target as HTMLInputElement)?.value ?? '')}
        />
        {iconBuilder?.({
          'aria-hidden': 'true',
          className:
            'pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4',
        })}
      </div>
    );
  }
);

export default Input;
