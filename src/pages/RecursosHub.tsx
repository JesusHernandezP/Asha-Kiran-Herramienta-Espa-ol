import { useLanguage } from '../contexts/LanguageContext';
import { glossaryTranslations } from '../data/glossaryTranslations';
import { allResources, resourceMeta } from '../data/recursosData';
import type { ResourceType } from '../data/recursosData';
import { FileText, Video, Headphones, BookOpen, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const typeIcons: Record<string, React.ReactNode> = {
  lecturas: <FileText size={28} />,
  videos: <Video size={28} />,
  audios: <Headphones size={28} />,
  glosario: <BookOpen size={28} />,
};

export function RecursosHub() {
  const { language } = useLanguage();
  const t = glossaryTranslations[language] || glossaryTranslations.es;
  const isRtl = language === 'ar';
  const navigate = useNavigate();

  const resourceTypes = [
    { type: 'lecturas', label: t.lecturas, desc: t.lecturasDesc, path: '/recursos/lecturas' },
    { type: 'videos', label: t.videos, desc: t.videosDesc, path: '/recursos/videos' },
    { type: 'audios', label: t.audios, desc: t.audiosDesc, path: '/recursos/audios' },
    { type: 'glosario', label: t.pageTitle, desc: t.pageSubtitle, path: '/glosario' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <section className="bg-white pt-10 pb-14 border-b border-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4fbf6] via-white to-[#fff9f0] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/aula-virtual" className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-[#00823B] transition-colors mb-6 font-medium">
            <ArrowLeft size={16} /> Aula Virtual
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#f4fbf6] px-4 py-1.5 rounded-full mb-4">
              <span className="text-lg">📚</span>
              <span className="text-xs font-bold text-[#00823B] uppercase tracking-wider">{t.allResources}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#192A56] mb-3">{t.recursosTitle}</h1>
            <p className="max-w-2xl mx-auto text-stone-500 font-medium">{t.recursosSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Resource Type Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceTypes.map(({ type, label, desc, path }) => {
              const isGlosario = type === 'glosario';
              const meta = isGlosario
                ? { emoji: '📖', color: '#8EAC3E', gradient: 'from-lime-500 to-green-600' }
                : resourceMeta[type as ResourceType];
              const count = isGlosario ? 6 : allResources[type as ResourceType].length;
              return (
                <button
                  key={type}
                  onClick={() => navigate(path)}
                  className="group text-left bg-white rounded-3xl border border-stone-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${meta.gradient}`}
                  />

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ backgroundColor: `${meta.color}15`, color: meta.color }}
                  >
                    {typeIcons[type]}
                  </div>

                  <h3 className="text-xl font-black text-[#192A56] mb-2">{label}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4">{desc}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-400 bg-stone-100 px-3 py-1 rounded-full">
                      {isGlosario
                        ? (language === 'es' ? '6 niveles' : '6 levels')
                        : `${count} ${language === 'es' ? 'recursos' : 'resources'}`
                      }
                    </span>
                    <ArrowRight size={18} className="text-stone-300 group-hover:text-[#00823B] group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent from all types */}
      <section className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#192A56] mb-8 text-center">{t.recentPosts}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(allResources)
              .filter(([type]) => type !== 'imagenes')
              .flatMap(([type, resources]) =>
                resources.slice(0, 2).map((resource) => {
                  const meta = resourceMeta[type as ResourceType];
                  return (
                    <div
                      key={resource.id}
                      className="bg-[#FAF9F6] rounded-2xl border border-stone-100 p-5 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl">{resource.emoji}</span>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: meta.color }}
                        >
                          {type}
                        </span>
                        {resource.level && (
                          <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">{resource.level}</span>
                        )}
                      </div>
                      <h3 className="font-bold text-[#192A56] mb-1">{resource.title}</h3>
                      <p className="text-sm text-stone-500 leading-relaxed mb-3">{resource.description}</p>
                      {resource.url && (
                        <Link
                          to={resource.url.startsWith('http') ? resource.url : resource.url}
                          target={resource.url.startsWith('http') ? '_blank' : undefined}
                          rel={resource.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1 text-sm font-bold text-[#00823B] hover:underline"
                        >
                          {resource.url.startsWith('http') ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                          {t.viewAll}
                        </Link>
                      )}
                    </div>
                  );
                })
              )
            }
          </div>
        </div>
      </section>
    </div>
  );
}
