"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage') as Language;
    if (saved) {
      setLanguage(saved);
    } else {
      // Default to PT if no preference saved
      setLanguage('pt');
    }
  }, []);

  useEffect(() => {
    // Update HTML lang attribute and class for theme
    document.documentElement.lang = language;
    if (language === 'en') {
      document.documentElement.classList.add('lang-en');
    } else {
      document.documentElement.classList.remove('lang-en');
    }

    // Sync with Google Translate if it exists
    const syncWithGoogle = () => {
      const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (googleCombo) {
        if (googleCombo.value !== language) {
          googleCombo.value = language;
          googleCombo.dispatchEvent(new Event('change'));
        }
        return true;
      }
      return false;
    };

    // Try immediately
    if (!syncWithGoogle()) {
      // If not ready, try periodically for a few seconds
      const interval = setInterval(() => {
        if (syncWithGoogle()) {
          clearInterval(interval);
        }
      }, 500);
      
      // Cleanup interval after 10 seconds to avoid infinite loop
      setTimeout(() => clearInterval(interval), 10000);
      return () => clearInterval(interval);
    }
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
