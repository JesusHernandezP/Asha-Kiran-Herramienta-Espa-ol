import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { aulaVirtualTranslations } from '../data/aulaVirtualTranslations';
import { lessons, Level } from '../data/content';

export function AulaVirtual() {
  const { language } = useLanguage();
  const t = aulaVirtualTranslations[language];
  const isRtl = language === 'ar';

  const levelConfigs: { id: Level; color: string; gradient: string; accent: string }[] = [
    { id: 'A1', color: 'bg-[#F2A93B]', gradient: 'from-[#F2A93B] to-[#E58C2C]', accent: '#F2A93B' },
    { id: 'A2', color: 'bg-[#E58C2C]', gradient: 'from-[#E58C2C] to-[#D17520]', accent: '#E58C2C' },
    { id: 'B1', color: 'bg-[#D34D3D]', gradient: 'from-[#D34D3D] to-[#C23333]', accent: '#D34D3D' },
    { id: 'B2', color: 'bg-[#C23333]', gradient: 'from-[#C23333] to-[#A52828]', accent: '#C23333' },
    { id: 'C1', color: 'bg-[#8EAC3E]', gradient: 'from-[#8EAC3E] to-[#679133]', accent: '#8EAC3E' },
    { id: 'C2', color: 'bg-[#679133]', gradient: 'from-[#679133] to-[#4E7228]', accent: '#679133' },
  ];

  return (
    <div className="flex flex-col" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header — compact on mobile */}
      <section className="bg-white pt-6 sm:pt-12 pb-5 sm:pb-10 border-b border-stone-200">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white shadow-sm border border-stone-100 flex items-center justify-center overflow-hidden shrink-0">
              <img src="/images/logo.png" alt="Asha-Kiran Logo" className="w-full h-full object-contain" />
            </div>
            <Link to="/" className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-widest hover:text-[#00823B] transition-colors">
              ← Vínculos
            </Link>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#192A56] mb-2 sm:mb-3">
            {t.pageTitle}
          </h1>
          <p className="text-stone-500 text-xs sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            {t.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Levels — Mobile: compact stacked cards */}
      <section className="py-4 sm:py-10 lg:py-16 bg-[#FAF9F6]">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-3 sm:space-y-5">
            {levelConfigs.map((lvl) => {
              const levelData = t.levels[lvl.id];
              const lessonCount = lessons.filter(l => l.level === lvl.id).length;
              const isAdvanced = ['B1', 'B2', 'C1', 'C2'].includes(lvl.id);

              return (
                <Link
                  key={lvl.id}
                  to={`/nivel/${lvl.id}`}
                  className="group block bg-white rounded-2xl sm:rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-stone-300 transition-all duration-300 overflow-hidden active:scale-[0.98]"
                >
                  {/* Mobile: horizontal card with level badge + content */}
                  <div className="flex flex-row">
                    {/* Level Badge with gradient background */}
                    <div className={`w-20 sm:w-40 md:w-48 bg-gradient-to-br ${lvl.gradient} relative overflow-hidden flex-shrink-0 flex flex-col items-center justify-center py-5 sm:py-8`}>
                      {/* Decorative circle */}
                      <div className="hidden sm:block absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700 text-[#fff]"></div>
                      <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full"></div>
                      <span className="text-3xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-sm tracking-tighter relative z-10">
                        {lvl.id}
                      </span>
                      <span className="text-[8px] sm:text-xs font-bold text-white/80 uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-0.5 sm:mt-1 text-center px-1 relative z-10">
                        {levelData.name}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-3 sm:p-6 md:p-8 flex flex-col justify-center min-w-0">
                      {/* Title + description */}
                      <div className="mb-2 sm:mb-4">
                        <div className="flex items-start justify-between gap-2">
                          <h2 className="text-sm sm:text-xl md:text-2xl font-black text-[#192A56] mb-0.5 sm:mb-2 leading-tight">
                            {lvl.id} — {levelData.name}
                          </h2>
                          {/* Desktop hover arrow */}
                          <div className="hidden sm:flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold text-[#00823B] uppercase tracking-wider">{t.startButton}</span>
                            <ArrowRight size={16} className="text-[#00823B] group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                        <p className="text-stone-500 text-[10px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {levelData.description}
                        </p>
                      </div>

                      {/* Skills — hidden on very small screens, 1 col mobile, 2 col desktop */}
                      <div className="hidden xs:grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 mb-2 sm:mb-4">
                        {levelData.skills.map((skill, i) => (
                          <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-stone-600">
                            <CheckCircle2 size={10} style={{ color: lvl.accent }} className="shrink-0 sm:w-3.5 sm:h-3.5" />
                            <span className="line-clamp-1">{skill}</span>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-stone-100 gap-2">
                        <span className="text-[9px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider whitespace-nowrap">
                          {lessonCount} {t.lessonsAvailable}
                        </span>
                        {isAdvanced && (
                          <span className="hidden sm:inline text-[9px] sm:text-[10px] font-bold text-stone-400 bg-stone-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                            {t.spanishOnly}
                          </span>
                        )}
                        {/* Mobile arrow */}
                        <div className="sm:hidden flex items-center gap-1">
                          <ArrowRight size={14} className="text-[#00823B]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
