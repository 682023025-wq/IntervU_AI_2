// src/features/CV/translations/index.js
import { translationsID } from './id';
import { translationsEN } from './en';

export const translations = {
  id: translationsID,
  en: translationsEN,
};

export const languageOptions = [
  { value: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
  { value: 'en', label: 'English', flag: '🇬🇧' },
];

// Helper function untuk translate
export const t = (key, language = 'id') => {
  const lang = translations[language] || translations.id;
  return lang[key] || key;
};