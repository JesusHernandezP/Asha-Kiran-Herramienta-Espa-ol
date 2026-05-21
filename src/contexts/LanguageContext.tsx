import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'uk' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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

export function replaceTransTags(text: string, language: Language): string {
  // Replace <trans en="..." ar="..." uk="..." fr="..."/> with the selected language text for HTML string usage
  return text.replace(/<trans\s+en="([^"]*)"\s+ar="([^"]*)"\s+uk="([^"]*)"\s+fr="([^"]*)"\s*\/>/g, (match, en, ar, uk, fr) => {
    switch (language) {
      case 'ar': return `<span class="text-[#00823B] font-bold" dir="rtl">${ar}</span>`;
      case 'uk': return `<span class="text-[#00823B] font-bold">${uk}</span>`;
      case 'fr': return `<span class="text-[#00823B] font-bold">${fr}</span>`;
      case 'en': 
      default: return `<span class="text-[#00823B] font-bold">${en}</span>`;
    }
  });
}

export function TransText({ text }: { text: string }) {
  const { language } = useLanguage();
  
  if (!text) return null;

  const parts = text.split(/(<trans\s+en="[^"]*"\s+ar="[^"]*"\s+uk="[^"]*"\s+fr="[^"]*"\s*\/>)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/<trans\s+en="([^"]*)"\s+ar="([^"]*)"\s+uk="([^"]*)"\s+fr="([^"]*)"\s*\/>/);
        if (match) {
          const [, en, ar, uk, fr] = match;
          let content = en;
          if (language === 'ar') content = ar;
          else if (language === 'uk') content = uk;
          else if (language === 'fr') content = fr;

          return (
            <span key={i} className="text-[#00823B] font-bold" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {content}
            </span>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}

