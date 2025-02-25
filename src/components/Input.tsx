import { forwardRef, PropsWithoutRef, ReactNode } from 'preact/compat';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface Props {
  value: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
  placeholder?: string;
  iconBuilder?: (props: PropsWithoutRef<ReactNode>) => ReactNode;
  classes?: string;
  clearable?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { value, onBlur, onChange, placeholder, iconBuilder, classes, clearable },
    ref
  ) => {
    const displayClearIcon = clearable && value != null && value !== '';

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
          className={`${classes} ${iconBuilder != null ? 'pl-10' : ''} ${clearable ? 'pr-10' : ''} focus:outline-primary col-start-1 row-start-1 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
          onBlur={(e) => onBlur?.((e.target as HTMLInputElement)?.value ?? '')}
        />
        {iconBuilder?.({
          'aria-hidden': 'true',
          className:
            'pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4',
        })}

        {displayClearIcon && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              onChange?.('');
            }}
            className="col-end-2 row-start-1 flex cursor-pointer items-center justify-self-end pr-2"
          >
            <XMarkIcon
              className="h-5 w-5 text-gray-500 hover:text-gray-700"
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    );
  }
);

export default Input;
