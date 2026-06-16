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
  const [visualMode, setVisualMode] = useState<VisualMode>('illustration');

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

export function parseTransTag(tag: string, language: Language): string {
  const getAttr = (lang: string): string | null => {
    const regex = new RegExp(`${lang}\\s*=\\s*(['"])(.*?)\\1`);
    const match = tag.match(regex);
    return match ? match[2] : null;
  };
  let val = getAttr(language);
  if (val === null && language !== 'en') {
    val = getAttr('en');
  }
  return val ? val.replace(/^["']|["']$/g, '') : '';
}

export function replaceTransTags(text: string, language: Language): string {
  if (language === 'es') {
    return text.replace(/<trans\s+[^>]*\/>/g, (match) => {
      const val = parseTransTag(match, 'en');
      if (val && !val.startsWith('(')) {
        return val;
      }
      return '';
    });
  }
  return text.replace(/<trans\s+[^>]*\/>/g, (match) => {
    const val = parseTransTag(match, language);
    if (val) {
      return `<span class="text-[#00823B] font-bold">${val}</span>`;
    }
    return '';
  });
}

export function TransText({ text, block = false }: { text: string; block?: boolean }) {
  const { language } = useLanguage();
  
  if (!text) return null;

  const parts = text.split(/(<trans\s+[^>]*\/>)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('<trans')) {
          if (language === 'es') {
            const val = parseTransTag(part, 'en');
            if (val && !val.startsWith('(')) {
              return <React.Fragment key={i}>{val}</React.Fragment>;
            }
            return null;
          }

          const val = parseTransTag(part, language);
          if (!val) return null;

          if (block) {
            return (
              <span key={i} className="block text-xs sm:text-xs text-stone-400 font-normal mt-1 leading-normal" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {val.startsWith('(') ? val : `(${val})`}
              </span>
            );
          } else {
            return (
              <span key={i} className="text-[#00823B] font-bold mx-0.5" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {val}
              </span>
            );
          }
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}


