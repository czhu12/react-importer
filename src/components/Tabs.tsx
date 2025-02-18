import Select, { SelectOption } from './Select';

type Tab = SelectOption<string>;

interface Props {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Tabs({ tabs, activeTab, onTabChange }: Props) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        <Select
          options={tabs}
          value={activeTab}
          onChange={(tab) => onTabChange(tab as string)}
        />
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                aria-current={tab.value === activeTab ? 'page' : undefined}
                onClick={() => onTabChange(tab.value)}
                className={` ${
                  tab.value === activeTab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } flex cursor-pointer items-center border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
