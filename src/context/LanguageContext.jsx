import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

// Cookie helper functions
const setCookie = (name, value, days = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
};

// Get initial language from cookie or default to Slovak
const getInitialLanguage = () => {
  const savedLanguage = getCookie('dental_language');
  if (savedLanguage && (savedLanguage === 'sk' || savedLanguage === 'en')) {
    return savedLanguage;
  }
  return 'sk'; // Slovak as default
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  // Save language to cookie when it changes
  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    setCookie('dental_language', lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'sk' ? 'en' : 'sk';
    setLanguage(newLang);
  }, [language, setLanguage]);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = translations[language];

      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k];
        } else {
          return key;
        }
      }

      return value || key;
    },
    [language]
  );

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
