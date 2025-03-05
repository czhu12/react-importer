import { ReactNode } from 'preact/compat';

type TranslationValue = string | { [key: string]: TranslationValue };
export type Translations = Record<string, TranslationValue>;
export type ArgumentsType<T> = Record<string, T>;

export type ArgumentsTypeText = ArgumentsType<string | number>;
export type ArgumentsTypeHtml = ArgumentsType<ReactNode>;

export type Resources = {
  [lang: string]: Translations;
};

export type TranslationContextType = {
  t: (key: string, argumentValues?: ArgumentsTypeText) => string;
  tHtml: (key: string, argumentValues?: ArgumentsTypeHtml) => ReactNode;
};
