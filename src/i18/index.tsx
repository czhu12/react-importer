import { createContext } from 'preact';
import enTranslation from './en/translation.json';
import frTranslation from './fr/translation.json';
import { useContext } from 'preact/hooks';
import { ReactNode } from 'preact/compat';
import { ArgumentsType, Resources, TranslationContextType } from './types';

/// Writing a custom translations module to reduce the size of the package

const resources: Resources = {
  en: enTranslation,
  fr: frTranslation,
};

const defaultLocale = 'en';

function extractTranslation(currentLocale: string, key: string) {
  const keyParts = key.split('.');

  let result: any = resources[currentLocale];

  for (const k of keyParts) {
    if (result && typeof result === 'object') {
      result = result[k];
    } else {
      return key;
    }
  }

  return typeof result === 'string' ? result : key;
}

function replaceArguments(translation: string, argumentValues: ArgumentsType) {
  // Mathing {{key}} in the translation string
  const argumentMatches = translation.split(/({{[^}]+}})/g);

  return (
    <span>
      {argumentMatches.map((argument) => {
        const argumentMatch = argument.match(/{{([^}]+)}}/);
        if (argumentMatch) {
          const key = argumentMatch[1];
          const argumentValue = argumentValues[key];

          return argumentValue ?? `{${key}}`;
        }

        return argument;
      })}
    </span>
  );
}

const TranslationContext = createContext<TranslationContextType>(
  {} as TranslationContextType
);

export function TranslationProvider({
  children,
  selectedLocale,
}: {
  children: ReactNode;
  selectedLocale?: string;
}) {
  const locale = selectedLocale ?? defaultLocale;

  function t(key: string, argumentValues: ArgumentsType = {}): ReactNode {
    const translation = extractTranslation(locale, key);

    return replaceArguments(translation, argumentValues);
  }

  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  return useContext(TranslationContext);
}
