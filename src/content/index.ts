import enContent from './en';

export { enContent };
export * from './en';

export type LanguageCode = 'en';

export const content: Record<LanguageCode, typeof enContent> = {
  en: enContent,
};

export const defaultLanguage: LanguageCode = 'en';

export const getContent = (language: LanguageCode = defaultLanguage) => {
  return content[language] || content[defaultLanguage];
};

export default content;