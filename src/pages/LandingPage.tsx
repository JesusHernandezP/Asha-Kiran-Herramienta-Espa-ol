import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Newspaper, Heart, Users, BookOpen, Briefcase, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { landingTranslations } from '../data/landingTranslations';

export function LandingPage() {
  const { language } = useLanguage();
  const t = landingTranslations[language];
  const isRtl = language === 'ar';

  return (
    <div className="flex flex-col" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero Section — Mobile-first: full viewport, stacked layout */}
      <section className="relative min-h-[85vh] sm:min-h-[70vh] flex items-end sm:items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&auto=format&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#192A56] via-[#192A56]/80 to-[#192A56]/40 sm:bg-gradient-to-r sm:from-[#192A56] sm:via-[#192A56]/90 sm:to-[#192A56]/50"></div>
        </div>

        {/* Decorative shapes — hidden on small screens for performance */}
        <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-[#00823B]/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4"></div>
        <div className="hidden sm:block absolute bottom-0 left-0 w-80 h-80 bg-[#F5A623]/15 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

        <div className="w-full px-5 sm:px-6 lg:px-8 pb-10 pt-20 sm:py-24 relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full mb-5 sm:mb-8 border border-white/20 shadow-sm">
              <img src="/images/logo.png" alt="Asha-Kiran Logo" className="w-5 h-5 object-contain shrink-0" />
              <span className="text-[#192A56] text-[10px] sm:text-xs font-bold uppercase tracking-widest">Fundación Asha-Kiran</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4 sm:mb-6">
              {t.heroTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89C73A] to-[#F5A623]">
                {t.heroTitleHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-white/70 font-medium leading-relaxed mb-6 sm:mb-10 max-w-2xl">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/aula-virtual"
                className="group flex items-center justify-center gap-3 px-6 py-4 sm:px-8 bg-[#00823B] text-white font-bold rounded-2xl shadow-lg shadow-[#00823B]/30 hover:bg-[#006A30] transition-all active:scale-95 text-sm sm:text-base"
              >
                {t.heroCta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/recursos-malaga"
                className="flex items-center justify-center gap-3 px-6 py-4 sm:px-8 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all active:scale-95 text-sm sm:text-base"
              >
                <MapPin size={18} />
                {t.cardRecursosCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards — Mobile: stacked full-width cards */}
      <section className="py-8 sm:py-16 lg:py-24 bg-[#FAF9F6] relative">
        <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-[#192A56]/5 to-transparent"></div>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Aula Virtual */}
            <Link
              to="/aula-virtual"
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#00823B]/30 transition-all duration-300 flex flex-row sm:flex-col"
            >
              {/* Mobile: side image, Desktop: top image */}
              <div className="w-24 h-auto sm:w-full sm:h-36 flex-shrink-0 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-[#00823B]/20 to-transparent"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <GraduationCap size={20} className="text-[#00823B] sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-center flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-black text-[#192A56] mb-1 sm:mb-2">{t.cardAulaTitle}</h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">{t.cardAulaDesc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00823B] group-hover:gap-2.5 transition-all">
                  {t.cardAulaCta} <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Recursos Málaga */}
            <Link
              to="/recursos-malaga"
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#F5A623]/30 transition-all duration-300 flex flex-row sm:flex-col"
            >
              <div className="w-24 h-auto sm:w-full sm:h-36 flex-shrink-0 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&auto=format&fit=crop&q=80"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-[#F5A623]/20 to-transparent"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <MapPin size={20} className="text-[#F5A623] sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-center flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-black text-[#192A56] mb-1 sm:mb-2">{t.cardRecursosTitle}</h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">{t.cardRecursosDesc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F5A623] group-hover:gap-2.5 transition-all">
                  {t.cardRecursosCta} <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Blog */}
            <a
              href="https://asha-kiran.org/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#8EAC3E]/30 transition-all duration-300 flex flex-row sm:flex-col"
            >
              <div className="w-24 h-auto sm:w-full sm:h-36 flex-shrink-0 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=80"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-[#8EAC3E]/20 to-transparent"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <Newspaper size={20} className="text-[#8EAC3E] sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-center flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-black text-[#192A56] mb-1 sm:mb-2">{t.cardBlogTitle}</h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">{t.cardBlogDesc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8EAC3E] group-hover:gap-2.5 transition-all">
                  {t.cardBlogCta} <ExternalLink size={12} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section — with background image */}
      <section className="relative py-12 sm:py-24 bg-white border-y border-stone-200 overflow-hidden">
        {/* Background photo with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&auto=format&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
        </div>
        <div className="relative z-10 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-[#f4fbf6] rounded-full mb-4 sm:mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#00823B]">{t.missionBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#192A56] mb-4 sm:mb-6 leading-tight">{t.missionTitle}</h2>
            <p className="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed">{t.missionText}</p>
          </div>
        </div>
      </section>

      {/* Activities Section — Mobile: 2 columns compact, Desktop: 4 columns */}
      <section className="py-8 sm:py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-widest mb-5 sm:mb-12 text-center">{t.activitiesTitle}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {t.activities.map((activity, idx) => {
              const icons = [
                <BookOpen size={22} className="text-[#00823B] sm:w-7 sm:h-7" />,
                <Users size={22} className="text-[#F5A623] sm:w-7 sm:h-7" />,
                <Heart size={22} className="text-[#D34D3D] sm:w-7 sm:h-7" />,
                <Briefcase size={22} className="text-[#8EAC3E] sm:w-7 sm:h-7" />,
              ];
              const bgColors = ['bg-[#f4fbf6]', 'bg-[#fff9f0]', 'bg-[#fef5f5]', 'bg-[#f7faef]'];
              const activityImages = [
                'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&auto=format&fit=crop&q=80',
              ];
              return (
                <div key={idx} className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  {/* Image — compact on mobile */}
                  <div className="h-20 sm:h-32 relative overflow-hidden">
                    <img
                      src={activityImages[idx]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className={`absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${bgColors[idx]} flex items-center justify-center shadow-sm`}>
                      {icons[idx]}
                    </div>
                  </div>
                  <div className="p-3 sm:p-5 flex-1">
                    <h3 className="text-xs sm:text-base font-bold text-[#192A56] mb-1 sm:mb-2 leading-tight">{activity.title}</h3>
                    <p className="text-stone-500 text-[10px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{activity.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section — with background image */}
      <section className="py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&auto=format&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#192A56]/90 to-[#0d4e2b]/90"></div>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">{t.ctaTitle}</h2>
          <p className="text-white/70 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-2xl mx-auto">{t.ctaText}</p>
          <a
            href="https://asha-kiran.org/se-voluntaria-o/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-4 sm:px-10 sm:py-5 bg-[#F5A623] text-white font-bold rounded-2xl shadow-lg shadow-[#F5A623]/30 hover:bg-[#d48d1a] transition-all active:scale-95 text-sm sm:text-lg"
          >
            {t.ctaButton}
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h3 className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 sm:mb-6">{t.contactTitle}</h3>
          <p className="text-stone-600 text-xs sm:text-sm mb-1.5 sm:mb-2">{t.contactAddress}</p>
          <p className="text-stone-500 text-xs sm:text-sm">{t.contactDelegate}</p>
          <p className="text-stone-400 text-[10px] sm:text-xs mt-2 sm:mt-3">📧 dayana.saavedra@asha-kiran.org</p>
        </div>
      </section>
    </div>
  );
}
