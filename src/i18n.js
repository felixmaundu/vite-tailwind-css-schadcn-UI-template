// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations for English and French
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    fr: {
      translation: fr
    }
  },
  lng: localStorage.getItem('language') || 'en', // default language or stored language
  fallbackLng: 'en', // fallback to English if translation not found
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  }
});

export default i18n;
