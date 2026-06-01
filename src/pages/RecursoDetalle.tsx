import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { glossaryTranslations } from '../data/glossaryTranslations';
import { allResources, resourceMeta } from '../data/recursosData';
import type { ResourceType, ResourceEntry } from '../data/recursosData';
import { ArrowLeft, Search, ExternalLink, Play, Image as ImageIcon, Volume2, BookOpen } from 'lucide-react';

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

export function RecursoDetalle() {
  const { type } = useParams<{ type: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const resourceType = type as ResourceType;
  const t = glossaryTranslations[language] || glossaryTranslations.es;
  const isRtl = language === 'ar';

  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Validate the resource type path parameter
  const isValidType = ['lecturas', 'videos', 'audios', 'imagenes'].includes(resourceType);

  const resources = useMemo(() => {
    if (!isValidType) return [];
    return allResources[resourceType];
  }, [resourceType, isValidType]);

  const meta = useMemo(() => {
    if (!isValidType) return { emoji: '📚', color: '#00823B', gradient: 'from-emerald-500 to-teal-600' };
    return resourceMeta[resourceType];
  }, [resourceType, isValidType]);

  const filteredResources = useMemo(() => {
    return resources.filter((r) => {
      const matchesLevel = selectedLevel === 'ALL' || r.level === selectedLevel;
      const matchesSearch =
        searchQuery === '' ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesLevel && matchesSearch;
    });
  }, [resources, selectedLevel, searchQuery]);

  if (!isValidType) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#FAF9F6]">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Recurso no encontrado</h2>
        <button
          onClick={() => navigate('/recursos')}
          className="px-5 py-2.5 bg-[#00823B] text-white rounded-xl font-bold hover:bg-[#00823B]/90 transition-colors"
        >
          Volver a Recursos
        </button>
      </div>
    );
  }

  const typeLabels: Record<ResourceType, string> = {
    lecturas: t.lecturas,
    videos: t.videos,
    audios: t.audios,
    imagenes: t.imagenes,
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <section className="bg-white pt-10 pb-14 border-b border-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4fbf6] via-white to-[#fff9f0] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/recursos"
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-[#00823B] transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={16} /> {t.backToResources}
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#f4fbf6] px-4 py-1.5 rounded-full mb-4">
              <span className="text-lg">{meta.emoji}</span>
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: meta.color }}
              >
                {typeLabels[resourceType]}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#192A56] mb-3">
              {typeLabels[resourceType]}
            </h1>
            <p className="max-w-2xl mx-auto text-stone-500 font-medium">
              {resourceType === 'lecturas' && t.lecturasDesc}
              {resourceType === 'videos' && t.videosDesc}
              {resourceType === 'audios' && t.audiosDesc}
              {resourceType === 'imagenes' && t.imagenesDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Level Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedLevel('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 ${
                selectedLevel === 'ALL'
                  ? 'bg-[#192A56] text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {t.allLevels}
            </button>
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 ${
                  selectedLevel === level
                    ? 'bg-[#00823B] text-white shadow-md'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00823B]/30 focus:border-[#00823B] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Resource Listing Grid */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Thumbnail / Header Area */}
                  {resourceType === 'videos' && item.embedUrl ? (
                    <div className="aspect-video w-full bg-black relative">
                      <iframe
                        src={item.embedUrl}
                        title={item.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : resourceType === 'imagenes' && item.imageUrl ? (
                    <div className="aspect-video w-full overflow-hidden relative group cursor-pointer" onClick={() => setSelectedImage(item.imageUrl || null)}>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs font-bold bg-[#192A56]/80 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                          <ImageIcon size={14} /> Ampliar
                        </span>
                      </div>
                    </div>
                  ) : item.imageUrl ? (
                    <div className="aspect-video w-full overflow-hidden relative">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="aspect-video w-full flex items-center justify-center"
                      style={{ backgroundColor: `${meta.color}08` }}
                    >
                      <span className="text-5xl">{item.emoji}</span>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{item.emoji}</span>
                      {item.level && (
                        <span className="text-xs font-extrabold text-[#00823B] bg-[#f4fbf6] px-2.5 py-0.5 rounded-full">
                          {item.level}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-black text-[#192A56] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-grow">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold text-stone-400 bg-stone-50 border border-stone-100 px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    {item.url && (
                      <div className="mt-auto pt-4 border-t border-stone-50">
                        {item.url.startsWith('http') ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-black text-[#00823B] hover:text-[#00823B]/80 transition-colors"
                          >
                            <span>Visitar Recurso</span>
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <Link
                            to={item.url}
                            className="inline-flex items-center gap-2 text-sm font-black text-[#00823B] hover:text-[#00823B]/80 transition-colors"
                          >
                            <span>Ir a la Lección</span>
                            <ArrowLeft size={14} className="rotate-180" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 shadow-sm">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="text-lg font-bold text-[#192A56] mb-1">Sin resultados</h3>
              <p className="text-stone-400 text-sm max-w-xs mx-auto">
                No hemos encontrado recursos con los filtros aplicados.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal for Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative">
            <img
              src={selectedImage}
              alt="Ampliada"
              className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
}
