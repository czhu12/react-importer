type TranslationValue = string | { [key: string]: TranslationValue };
export type Translations = Record<string, TranslationValue>;
export type ArgumentsType = Record<string, string | number>;

export type Resources = {
  [lang: string]: Translations;
};

export type TranslationContextType = {
  t: (key: string, argumentValues?: ArgumentsType) => string;
};

export type TranslationFunction = (
  key: string,
  argumentValues?: ArgumentsType
) => string;
