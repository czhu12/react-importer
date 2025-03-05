import { ReactNode } from 'preact/compat';

type TranslationValue = string | { [key: string]: TranslationValue };
export type Translations = Record<string, TranslationValue>;
export type ArgumentsType = Record<string, ReactNode>;

export type Resources = {
  [lang: string]: Translations;
};

export type TranslationContextType = {
  t: (key: string, argumentValues?: ArgumentsType) => ReactNode;
};
