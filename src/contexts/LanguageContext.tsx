import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'ar' | 'uk' | 'fr';
export type VisualMode = 'photo' | 'illustration';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  visualMode: VisualMode;
  setVisualMode: (mode: VisualMode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [visualMode, setVisualMode] = useState<VisualMode>('photo');

  const handleSetVisualMode = (mode: VisualMode) => {
    // No-op now that toggle is removed
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, visualMode, setVisualMode: handleSetVisualMode }}>
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
  // When Spanish is selected, remove <trans> tags entirely so the original Spanish content remains clean
  if (language === 'es') {
    return text.replace(/<trans\s+en="[^"]*"\s+ar="[^"]*"\s+uk="[^"]*"\s+fr="[^"]*"\s*\/>/g, '');
  }
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

  // When Spanish is selected, strip all trans tags and return plain text
  if (language === 'es') {
    const cleanText = text.replace(/<trans\s+en="[^"]*"\s+ar="[^"]*"\s+uk="[^"]*"\s+fr="[^"]*"\s*\/>/g, '');
    return <>{cleanText}</>;
  }

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

