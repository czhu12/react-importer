import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import {
  ChevronUpDownIcon,
  XMarkIcon,
  CheckIcon,
} from '@heroicons/react/20/solid';
import { useTranslations } from '../i18';

export interface SelectOption<T> {
  label: string;
  value: T;
  icon?: React.ReactNode;
  group?: string;
}

interface Props<T> {
  value: T[] | T | null;
  options: SelectOption<T>[];
  onChange: (value: T[] | T | null) => void;
  multiple?: boolean;
  compareFunction?: (a: T, b: T) => boolean;
  clearable?: boolean;
}

export default function Select<T>({
  value,
  options,
  onChange,
  multiple = false,
  compareFunction = (a, b) => a === b,
  clearable = false,
}: Props<T>) {
  const { t } = useTranslations();

  const isSelected = (valueToCheck: T) => {
    if (multiple && Array.isArray(value)) {
      return value.some((selected) => compareFunction(selected, valueToCheck));
    }
    return compareFunction(value as T, valueToCheck);
  };

  const handleChange = (selected: T | T[]) => {
    if (multiple) {
      const selectedArray = Array.isArray(selected) ? selected : [selected];
      onChange(selectedArray);
    } else {
      onChange(selected as T);
    }
  };

  const clear = () => {
    if (multiple) {
      onChange([]);
    } else {
      onChange(null);
    }
  };

  const selectedOptions = options.filter((option) => isSelected(option.value));

  const hasGroupProperty = options.some((option) => option.group);

  const groupedOptions = hasGroupProperty
    ? Object.entries(
        options.reduce((acc: Record<string, SelectOption<T>[]>, option) => {
          const groupKey = option.group || 'ungrouped';
          acc[groupKey] = acc[groupKey] || [];
          acc[groupKey].push(option);
          return acc;
        }, {})
      ).map(([group, items]) => ({
        label: group,
        items,
      }))
    : [{ label: null, items: options }];

  return (
    <Listbox value={value} onChange={handleChange} multiple={multiple}>
      <div className="relative">
        <ListboxButton className="focus:outline-primary grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6">
          <span className="col-start-1 row-start-1 truncate pr-6">
            {selectedOptions.length > 0
              ? selectedOptions.map((o) => o.label).join(', ')
              : t('components.select.optionPlaceholder')}
          </span>

          {clearable && selectedOptions.length > 0 && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                clear();
              }}
              className="absolute inset-y-0 right-8 flex cursor-pointer items-center pr-2"
            >
              <XMarkIcon
                className="h-5 w-5 text-gray-500 hover:text-gray-700"
                aria-hidden="true"
              />
            </span>
          )}

          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {groupedOptions.map(({ label, items }) => (
            <div key={label || 'all'}>
              {label && (
                <div className="py-2 pr-9 pl-3 text-gray-400 uppercase">
                  {label}
                </div>
              )}
              {items.map((option) => (
                <ListboxOption
                  key={option.value as string}
                  value={option.value}
                  className="group data-focus:bg-primary relative flex cursor-default items-center py-2 pr-9 pl-3 text-gray-900 select-none data-focus:text-white data-focus:outline-hidden"
                >
                  {option.icon}

                  <span className="block truncate font-normal group-data-selected:font-semibold">
                    {option.label}
                  </span>

                  {isSelected(option.value) && (
                    <span className="text-primary absolute inset-y-0 right-0 flex items-center pr-4 group-data-focus:text-white">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  )}
                </ListboxOption>
              ))}
            </div>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
