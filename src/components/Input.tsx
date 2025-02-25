import { forwardRef } from 'preact/compat';

interface Props {
  value: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
  placeholder?: string;
  classes?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, onBlur, onChange, placeholder, classes }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange?.((e.target as HTMLInputElement)?.value ?? '')
        }
        className={`${classes} focus:outline-primary rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
        onBlur={(e) => onBlur?.((e.target as HTMLInputElement)?.value ?? '')}
      />
    );
  }
);

export default Input;
