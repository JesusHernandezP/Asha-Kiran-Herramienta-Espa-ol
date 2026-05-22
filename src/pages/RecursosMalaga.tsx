import { MapPin, Utensils, Building, Briefcase, ExternalLink, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { recursosMalagaTranslations } from '../data/recursosMalagaTranslations';

export function RecursosMalaga() {
  const { language } = useLanguage();
  const t = recursosMalagaTranslations[language];
  const isRtl = language === 'ar';

  // Icons and colors stay fixed regardless of language (not translatable)
  const categoryMeta = [
    {
      icon: <Utensils size={32} className="text-[#00823B]" />,
      color: 'bg-[#f4fbf6]',
      links: [
        'https://comedorsocialyosoytu.com/',
        'https://datosabiertos.malaga.eu/'
      ]
    },
    {
      icon: <Building size={32} className="text-[#F5A623]" />,
      color: 'bg-[#fff9f0]',
      links: [
        'https://www.malaga.eu'
      ]
    },
    {
      icon: <Briefcase size={32} className="text-[#8EAC3E]" />,
      color: 'bg-[#f7faef]',
      links: [
        'https://www.saempleo.es',
        'https://www.sepe.es'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <section className="bg-white pt-12 pb-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-[#192A56] mb-4">
            {t.headerTitle} <span className="text-[#00823B]">{t.headerTitleHighlight}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-stone-500 font-medium">
            {t.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${categoryMeta[idx].color} flex items-center justify-center shadow-sm`}>
                    {categoryMeta[idx].icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#192A56]">{cat.title}</h2>
                    <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">{cat.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all">
                      <h3 className="text-lg font-bold text-[#192A56] mb-3">{item.name}</h3>

                      <div className="space-y-2">
                        {item.address && (
                          <div className={`flex items-start gap-2 text-stone-600 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                            <MapPin size={16} className="mt-1 flex-shrink-0 text-[#00823B]" />
                            <span className="text-sm">{item.address}</span>
                          </div>
                        )}

                        {item.phone && (
                          <div className={`flex items-center gap-2 text-stone-600 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                            <Phone size={16} className="flex-shrink-0 text-[#00823B]" />
                            <span className="text-sm" dir="ltr">{item.phone}</span>
                          </div>
                        )}

                        <p className="text-sm text-stone-500 leading-relaxed mt-2">
                          {item.info}
                        </p>

                        {item.extra && (
                          <p className="text-xs text-stone-400 italic mt-1">
                            {item.extra}
                          </p>
                        )}

                        <a
                          href={categoryMeta[idx].links[i]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 mt-4 text-sm font-bold text-[#00823B] hover:underline ${isRtl ? 'flex-row-reverse' : ''}`}
                        >
                          {item.linkText} <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advice Section */}
      <section className="bg-[#fcfdfa] py-16 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-2 bg-green-50 rounded-full mb-4">
            <div className="bg-[#00823B] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
              {t.adviceBadge}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-[#192A56] mb-4">{t.adviceTitle}</h2>
          <p className="text-stone-500 leading-relaxed mb-8">
            {t.adviceText}
          </p>
          <div className="flex justify-center">
            <a
              href="https://derechossociales.malaga.eu/servicios-sociales-comunitarios/centros/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#00823B] text-white font-bold rounded-2xl shadow-lg hover:bg-[#006A30] transition-all hover:-translate-y-1"
            >
              {t.adviceButton}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
