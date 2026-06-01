import { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { glossaryTranslations } from '../data/glossaryTranslations';
import { glossaryByLevel, verbsByLevel } from '../data/glossaryData';
import type { GlossaryTheme, GlossaryWord, VerbGroup, VerbEntry } from '../data/glossaryData';
import type { Level } from '../data/content';
import { Search, BookOpen, Languages, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const levelColors: Record<Level, string> = {
  A1: '#00823B', A2: '#8EAC3E', B1: '#F5A623', B2: '#E58C2C', C1: '#D34D3D', C2: '#8B2E4F',
};

function WordCard({ word, language }: { word: GlossaryWord; language: string }) {
  const translation = word.translations[language] || word.translations.en || '';
  return (
    <div className="group relative bg-white rounded-2xl border border-stone-100 p-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center gap-3">
        <span className="text-2xl flex-shrink-0">{word.emoji}</span>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-[#192A56] text-sm leading-tight truncate">{word.word}</p>
          {language !== 'es' && translation && (
            <p className="text-[#00823B] font-semibold text-xs mt-0.5 truncate" dir={language === 'ar' ? 'rtl' : 'ltr'}>{translation}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ConjugationTable({ verb, language, t }: { verb: VerbEntry; language: string; t: ReturnType<typeof getT> }) {
  const translation = verb.translations[language] || verb.translations.en || '';
  const exampleTrans = verb.exampleTranslations[language] || verb.exampleTranslations.en || '';
  const pronouns = t.pronouns;
  const entries = [
    { pronoun: pronouns.yo, form: verb.conjugation.yo },
    { pronoun: pronouns.tú, form: verb.conjugation.tú },
    { pronoun: pronouns.él, form: verb.conjugation.él },
    { pronoun: pronouns.nosotros, form: verb.conjugation.nosotros },
    { pronoun: pronouns.vosotros, form: verb.conjugation.vosotros },
    { pronoun: pronouns.ellos, form: verb.conjugation.ellos },
  ];

  return (
    <div className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{verb.emoji}</span>
        <div>
          <h4 className="font-black text-[#192A56] text-lg">{verb.infinitive}</h4>
          {language !== 'es' && <p className="text-[#00823B] font-semibold text-sm" dir={language === 'ar' ? 'rtl' : 'ltr'}>{translation}</p>}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
        {entries.map((e) => (
          <div key={e.pronoun} className="bg-[#f4fbf6] rounded-xl px-3 py-2 text-center">
            <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block">{e.pronoun}</span>
            <span className="text-sm font-bold text-[#192A56]">{e.form}</span>
          </div>
        ))}
      </div>
      <div className="bg-stone-50 rounded-xl px-4 py-3 mt-2">
        <p className="text-sm text-stone-700 italic">📌 {verb.example}</p>
        {language !== 'es' && exampleTrans && (
          <p className="text-xs text-[#00823B] font-semibold mt-1" dir={language === 'ar' ? 'rtl' : 'ltr'}>{exampleTrans}</p>
        )}
      </div>
    </div>
  );
}

function ThemeSection({ theme, language, searchQuery }: { theme: GlossaryTheme; language: string; searchQuery: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const themeName = language !== 'es' && theme.translations[language] ? `${theme.name} — ${theme.translations[language]}` : theme.name;

  const filteredWords = useMemo(() => {
    if (!searchQuery) return theme.words;
    const q = searchQuery.toLowerCase();
    return theme.words.filter(w =>
      w.word.toLowerCase().includes(q) ||
      Object.values(w.translations).some(t => t.toLowerCase().includes(q))
    );
  }, [theme.words, searchQuery]);

  if (searchQuery && filteredWords.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{theme.emoji}</span>
          <div className="text-left">
            <h3 className="font-bold text-[#192A56] text-base">{themeName}</h3>
            <p className="text-xs text-stone-400">{filteredWords.length} {language === 'es' ? 'palabras' : 'words'}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">{filteredWords.length}</span>
          {isExpanded ? <ChevronUp size={18} className="text-stone-400" /> : <ChevronDown size={18} className="text-stone-400" />}
        </div>
      </button>
      {(isExpanded || searchQuery) && (
        <div className="px-5 pb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredWords.map((word) => (
              <WordCard key={word.word} word={word} language={language} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function VerbGroupSection({ group, language, t }: { group: VerbGroup; language: string; t: ReturnType<typeof getT> }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const groupName = language !== 'es' && group.translations[language] ? `${group.name} — ${group.translations[language]}` : group.name;

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between bg-white rounded-2xl px-5 py-4 border border-stone-100 shadow-sm hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{group.emoji}</span>
          <h3 className="font-bold text-[#192A56] text-lg">{groupName}</h3>
        </div>
        {isExpanded ? <ChevronUp size={18} className="text-stone-400" /> : <ChevronDown size={18} className="text-stone-400" />}
      </button>
      {isExpanded && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {group.verbs.map((verb) => (
            <ConjugationTable key={verb.infinitive} verb={verb} language={language} t={t} />
          ))}
        </div>
      )}
    </div>
  );
}

function getT(language: string) {
  return glossaryTranslations[language as keyof typeof glossaryTranslations] || glossaryTranslations.es;
}

export function Glosario() {
  const { language } = useLanguage();
  const t = getT(language);
  const isRtl = language === 'ar';

  const [selectedLevel, setSelectedLevel] = useState<Level>('A1');
  const [activeTab, setActiveTab] = useState<'vocabulario' | 'verbos'>('vocabulario');
  const [searchQuery, setSearchQuery] = useState('');

  const themes = glossaryByLevel[selectedLevel] || [];
  const verbGroups = verbsByLevel[selectedLevel] || [];

  const totalWords = useMemo(() => themes.reduce((acc, th) => acc + th.words.length, 0), [themes]);
  const totalVerbs = useMemo(() => verbGroups.reduce((acc, g) => acc + g.verbs.length, 0), [verbGroups]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <section className="bg-white pt-10 pb-14 border-b border-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4fbf6] via-white to-[#f0f7ff] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/aula-virtual" className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-[#00823B] transition-colors mb-6 font-medium">
            <ArrowLeft size={16} /> {t.backToResources}
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#f4fbf6] px-4 py-1.5 rounded-full mb-4">
              <BookOpen size={16} className="text-[#00823B]" />
              <span className="text-xs font-bold text-[#00823B] uppercase tracking-wider">
                {t.pageTitle}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#192A56] mb-3">
              {t.pageTitle} <span className="text-[#00823B]">{selectedLevel}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-stone-500 font-medium">{t.pageSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Level Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {levels.map((level) => {
              const hasContent = (glossaryByLevel[level]?.length || 0) > 0 || (verbsByLevel[level]?.length || 0) > 0;
              return (
                <button
                  key={level}
                  onClick={() => { setSelectedLevel(level); setSearchQuery(''); }}
                  disabled={!hasContent}
                  className={`px-5 py-2 rounded-xl text-sm font-black transition-all duration-300 ${
                    selectedLevel === level
                      ? 'text-white shadow-lg scale-105'
                      : hasContent
                        ? 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        : 'bg-stone-50 text-stone-300 cursor-not-allowed'
                  }`}
                  style={selectedLevel === level ? { backgroundColor: levelColors[level] } : {}}
                >
                  {level}
                </button>
              );
            })}
          </div>

          {/* Tabs + Search */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex bg-stone-100 rounded-xl p-1">
              <button
                onClick={() => setActiveTab('vocabulario')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'vocabulario' ? 'bg-white text-[#192A56] shadow-sm' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Languages size={16} /> {t.tabVocabulary}
                  <span className="text-xs bg-[#f4fbf6] text-[#00823B] px-2 py-0.5 rounded-full font-bold">{totalWords}</span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab('verbos')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'verbos' ? 'bg-white text-[#192A56] shadow-sm' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  📝 {t.tabVerbs}
                  <span className="text-xs bg-[#f4fbf6] text-[#00823B] px-2 py-0.5 rounded-full font-bold">{totalVerbs}</span>
                </span>
              </button>
            </div>

            {activeTab === 'vocabulario' && (
              <div className="relative flex-1 max-w-md">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00823B]/30 focus:border-[#00823B] transition-all"
                  dir={isRtl ? 'rtl' : 'ltr'}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'vocabulario' ? (
            themes.length > 0 ? (
              <div className="space-y-4">
                {themes.map((theme) => (
                  <ThemeSection key={theme.id} theme={theme} language={language} searchQuery={searchQuery} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-6xl mb-4">📭</p>
                <p className="text-stone-400 font-medium text-lg">{t.noContent}</p>
              </div>
            )
          ) : (
            verbGroups.length > 0 ? (
              <div className="space-y-6">
                {verbGroups.map((group) => (
                  <VerbGroupSection key={group.id} group={group} language={language} t={t} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-6xl mb-4">📭</p>
                <p className="text-stone-400 font-medium text-lg">{t.noContent}</p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
