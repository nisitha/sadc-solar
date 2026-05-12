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
    // Strictly pull from localStorage and nowhere else
    const saved = localStorage.getItem('preferredLanguage') as Language;
    if (saved && (saved === 'en' || saved === 'pt')) {
      setLanguage(saved);
    } else {
      // Default to PT only if nothing is in localStorage
      setLanguage('pt');
    }
  }, []);

  useEffect(() => {
    // Update HTML lang attribute and class for theme
    document.documentElement.lang = language;
    
    // Ensure the 'translate' attribute is set to 'no' as requested in layout
    // but we can reinforce it here if needed. 
    // The user already asked to add it to layout.tsx
    
    if (language === 'en') {
      document.documentElement.classList.add('lang-en');
    } else {
      document.documentElement.classList.remove('lang-en');
    }

    // Sync with Google Translate if it exists, but ONLY manually
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

    // Try sync once
    syncWithGoogle();
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
