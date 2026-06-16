import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Globe, Search, ChevronDown, ChevronUp, 
  ExternalLink, Info, Heart, Building, Briefcase, Scale, 
  Landmark, Compass, CheckCircle2, User, Clock, MessageSquare, AlertCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { recursosMalagaLabels, malagaResourcesList, Resource } from '../data/recursosMalagaTranslations';

export function RecursosMalaga() {
  const { language } = useLanguage();
  const t = recursosMalagaLabels[language];
  const isRtl = language === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  // Toggle expanded details for a resource card
  const toggleExpand = (idx: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Category metadata (icons, colors, and key labels)
  const categoryMeta: Record<string, { icon: React.ReactNode; color: string; bg: string; border: string; text: string }> = {
    alimentacion: {
      icon: <Heart size={20} className="text-[#00823B]" />,
      color: 'bg-[#f4fbf6]',
      border: 'border-[#d0ecd7]',
      bg: '#00823B',
      text: t.categoryFood
    },
    alojamiento: {
      icon: <Building size={20} className="text-[#F5A623]" />,
      color: 'bg-[#fff9f0]',
      border: 'border-[#ffe9c9]',
      bg: '#F5A623',
      text: t.categoryShelter
    },
    apoyo_social: {
      icon: <Heart size={20} className="text-[#D93B3B]" />,
      color: 'bg-[#fff5f5]',
      border: 'border-[#ffdcd9]',
      bg: '#D93B3B',
      text: t.categorySocial
    },
    empleo_formacion: {
      icon: <Briefcase size={20} className="text-[#8EAC3E]" />,
      color: 'bg-[#f7faef]',
      border: 'border-[#e8f0d2]',
      bg: '#8EAC3E',
      text: t.categoryJob
    },
    tramites_legal: {
      icon: <Scale size={20} className="text-[#4A90E2]" />,
      color: 'bg-[#f0f6ff]',
      border: 'border-[#d2e5ff]',
      bg: '#4A90E2',
      text: t.categoryLegal
    },
    salud_finanzas: {
      icon: <Landmark size={20} className="text-[#7B57CC]" />,
      color: 'bg-[#f8f5fc]',
      border: 'border-[#eae2f7]',
      bg: '#7B57CC',
      text: t.categoryFinance
    },
    otros: {
      icon: <Compass size={20} className="text-[#6B7280]" />,
      color: 'bg-[#f3f4f6]',
      border: 'border-[#e5e7eb]',
      bg: '#6B7280',
      text: t.categoryOther
    }
  };

  // Filter resources based on active category and search query
  const filteredResources = malagaResourcesList.filter((r) => {
    const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
    
    if (!matchesCategory) return false;
    
    if (searchQuery.trim() === '') return true;
    
    const query = searchQuery.toLowerCase();
    return (
      r.name.toLowerCase().includes(query) ||
      r.description.toLowerCase().includes(query) ||
      (r.activities && r.activities.toLowerCase().includes(query)) ||
      (r.address && r.address.toLowerCase().includes(query)) ||
      (r.target && r.target.toLowerCase().includes(query))
    );
  });

  // Calculate counters for each category
  const getCategoryCount = (cat: string) => {
    if (cat === 'all') return malagaResourcesList.length;
    return malagaResourcesList.filter(r => r.category === cat).length;
  };

  const categoriesList = [
    { id: 'all', label: t.categoryAll },
    { id: 'apoyo_social', label: t.categorySocial },
    { id: 'alojamiento', label: t.categoryShelter },
    { id: 'empleo_formacion', label: t.categoryJob },
    { id: 'salud_finanzas', label: t.categoryFinance },
    { id: 'alimentacion', label: t.categoryFood },
    { id: 'tramites_legal', label: t.categoryLegal },
    { id: 'otros', label: t.categoryOther }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <section className="bg-white pt-12 pb-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-[#192A56] mb-4">
            {t.headerTitle} <span className="text-[#00823B]">{t.headerTitleHighlight}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-stone-500 font-medium">
            {t.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Control Panel (Search & Filters) */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-10 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Search Box */}
          <div className="max-w-2xl mx-auto relative">
            <div className={`absolute inset-y-0 ${isRtl ? 'right-4' : 'left-4'} flex items-center pointer-events-none text-stone-400`}>
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-4 ${isRtl ? 'pr-12 pl-4' : 'pl-12 pr-4'} rounded-3xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#00823B]/20 focus:border-[#00823B] bg-[#FAF9F6] text-[#192A56] font-medium transition-all shadow-inner`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute inset-y-0 ${isRtl ? 'left-4' : 'right-4'} flex items-center text-stone-400 hover:text-stone-600 font-bold`}
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categoriesList.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              
              if (count === 0 && cat.id !== 'all') return null; // Hide categories with 0 items
              
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setExpandedCards({}); // Collapse cards on category change
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#00823B] text-white hover:bg-[#006A30]'
                      : 'bg-[#FAF9F6] text-stone-600 hover:bg-stone-100 hover:text-[#192A56]'
                  }`}
                >
                  {cat.id !== 'all' && categoryMeta[cat.id] && (
                    <span className={`inline-flex items-center ${isActive ? 'text-white' : ''}`}>
                      {categoryMeta[cat.id].icon}
                    </span>
                  )}
                  {cat.label}
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-200/60 text-stone-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid Content Section */}
      <section className="py-12 sm:py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 shadow-sm max-w-xl mx-auto p-8">
              <AlertCircle size={48} className="mx-auto text-stone-400 mb-4 animate-pulse" />
              <p className="text-stone-600 font-bold text-lg">{t.noResults}</p>
            </div>
          ) : (
            <>
              {/* Counter status label */}
              <div className="mb-6 text-sm text-stone-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Info size={16} />
                <span>
                  {filteredResources.length} {filteredResources.length === 1 ? 'recurso encontrado' : 'recursos encontrados'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => {
                  const isExpanded = !!expandedCards[index];
                  const meta = categoryMeta[resource.category] || categoryMeta.otros;
                  const isFree = resource.free.toLowerCase() === 'si' || resource.free.toLowerCase() === 'sí';
                  
                  return (
                    <div 
                      key={index} 
                      className="bg-white rounded-3xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:border-stone-300"
                    >
                      <div>
                        {/* Card Top Branding Header */}
                        <div className="p-6 pb-4 flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl ${meta.color} border ${meta.border} flex items-center justify-center shadow-sm`}>
                              {meta.icon}
                            </div>
                            <div>
                              <span className="text-[10px] text-stone-400 font-black uppercase tracking-wider">
                                {meta.text}
                              </span>
                            </div>
                          </div>
                          
                          {/* Free / Gratuito Badge */}
                          {isFree ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-[#00823B] text-[10px] font-black rounded-full uppercase tracking-wider border border-green-100">
                              <CheckCircle2 size={10} />
                              {t.freeLabel}
                            </span>
                          ) : resource.free ? (
                            <span className="inline-flex items-center px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-black rounded-full uppercase tracking-wider border border-amber-100">
                              {resource.free}
                            </span>
                          ) : null}
                        </div>

                        {/* Title and Short Description */}
                        <div className="px-6">
                          <h3 className="text-xl font-bold text-[#192A56] mb-3 group-hover:text-[#00823B] transition-colors leading-snug">
                            {resource.name}
                          </h3>
                          <p className="text-sm text-stone-500 leading-relaxed font-normal">
                            {resource.description}
                          </p>
                        </div>

                        {/* Expandable Details Container */}
                        <div 
                          className={`px-6 overflow-hidden transition-all duration-300 ${
                            isExpanded ? 'max-h-[800px] py-4 border-t border-stone-100 mt-4 bg-stone-50/50' : 'max-h-0'
                          }`}
                        >
                          <div className="space-y-4 text-sm">
                            {/* Address with Google Maps link */}
                            {resource.address && (
                              <div className="flex items-start gap-2.5 text-stone-600">
                                <MapPin size={16} className="mt-1 flex-shrink-0 text-stone-400" />
                                <div>
                                  <span className="font-bold text-stone-700 block text-xs uppercase tracking-wider mb-0.5">{t.addressLabel}</span>
                                  <span className="text-stone-600 text-[13px]">{resource.address}</span>
                                  <a 
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resource.name + ' ' + resource.address + ' Malaga')}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[#00823B] font-bold text-xs hover:underline block mt-1"
                                  >
                                    {isRtl ? '← عرض على الخريطة' : '→ Ver en mapa'}
                                  </a>
                                </div>
                              </div>
                            )}

                            {/* Hours / Schedule */}
                            {resource.hours && (
                              <div className="flex items-start gap-2.5 text-stone-600">
                                <Clock size={16} className="mt-1 flex-shrink-0 text-stone-400" />
                                <div>
                                  <span className="font-bold text-stone-700 block text-xs uppercase tracking-wider mb-0.5">{t.hoursLabel}</span>
                                  <span className="text-stone-600 text-[13px]">{resource.hours}</span>
                                </div>
                              </div>
                            )}

                            {/* Requirements */}
                            {resource.requirements && (
                              <div className="flex items-start gap-2.5 text-stone-600">
                                <Info size={16} className="mt-1 flex-shrink-0 text-stone-400" />
                                <div>
                                  <span className="font-bold text-stone-700 block text-xs uppercase tracking-wider mb-0.5">{t.reqsLabel}</span>
                                  <span className="text-stone-600 text-[13px]">{resource.requirements}</span>
                                </div>
                              </div>
                            )}

                            {/* Target group */}
                            {resource.target && (
                              <div className="flex items-start gap-2.5 text-stone-600">
                                <User size={16} className="mt-1 flex-shrink-0 text-stone-400" />
                                <div>
                                  <span className="font-bold text-stone-700 block text-xs uppercase tracking-wider mb-0.5">{t.targetLabel}</span>
                                  <span className="text-stone-600 text-[13px]">{resource.target}</span>
                                </div>
                              </div>
                            )}

                            {/* Activities & Services */}
                            {resource.activities && (
                              <div className="flex items-start gap-2.5 text-stone-600">
                                <MessageSquare size={16} className="mt-1 flex-shrink-0 text-stone-400" />
                                <div>
                                  <span className="font-bold text-stone-700 block text-xs uppercase tracking-wider mb-0.5">{t.activitiesLabel}</span>
                                  <span className="text-stone-600 text-[13px]">{resource.activities}</span>
                                </div>
                              </div>
                            )}

                            {/* Phone / Email block */}
                            {(resource.phone || resource.email || resource.social) && (
                              <div className="pt-2 border-t border-stone-200/60 space-y-2">
                                {resource.phone && (
                                  <div className="flex items-center gap-2.5">
                                    <Phone size={14} className="text-[#00823B]" />
                                    <a href={`tel:${resource.phone.replace(/[^0-9+]/g, '')}`} className="text-stone-600 hover:text-[#00823B] text-[13px] font-medium hover:underline">
                                      {resource.phone}
                                    </a>
                                  </div>
                                )}
                                {resource.email && (
                                  <div className="flex items-center gap-2.5">
                                    <Mail size={14} className="text-[#00823B]" />
                                    <a href={`mailto:${resource.email}`} className="text-stone-600 hover:text-[#00823B] text-[13px] font-medium hover:underline break-all">
                                      {resource.email}
                                    </a>
                                  </div>
                                )}
                                {resource.social && (
                                  <div className="flex items-center gap-2.5">
                                    <Globe size={14} className="text-[#00823B]" />
                                    {resource.social.startsWith('@') ? (
                                      <a 
                                        href={`https://www.instagram.com/${resource.social.substring(1)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-stone-600 hover:text-[#00823B] text-[13px] font-medium hover:underline"
                                      >
                                        Instagram: {resource.social}
                                      </a>
                                    ) : resource.social.startsWith('http') ? (
                                      <a 
                                        href={resource.social}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-stone-600 hover:text-[#00823B] text-[13px] font-medium hover:underline"
                                      >
                                        {isRtl ? 'شبكة تواصل' : 'Red Social'}
                                      </a>
                                    ) : (
                                      <span className="text-stone-600 text-[13px]">{resource.social}</span>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expand toggle & Site links buttons */}
                      <div className="p-6 pt-4 border-t border-stone-100/80 flex items-center justify-between gap-4 mt-auto">
                        {/* Expand toggle button */}
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-xs font-bold text-stone-500 hover:text-[#192A56] transition-colors flex items-center gap-1 py-1"
                        >
                          {isExpanded ? (
                            <>
                              {isRtl ? 'إخفاء التفاصيل' : 'Ocultar detalles'}
                              <ChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              {isRtl ? 'عرض التفاصيل' : 'Ver detalles'}
                              <ChevronDown size={16} />
                            </>
                          )}
                        </button>

                        {/* Visit Web button */}
                        {resource.web ? (
                          <a
                            href={resource.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#00823B] bg-[#00823B]/5 hover:bg-[#00823B] hover:text-white rounded-xl transition-all border border-[#00823B]/10 hover:border-transparent"
                          >
                            {t.visitWeb}
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-[10px] text-stone-400 italic font-medium">
                            {isRtl ? 'لا يوجد موقع' : 'Sin web'}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
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
