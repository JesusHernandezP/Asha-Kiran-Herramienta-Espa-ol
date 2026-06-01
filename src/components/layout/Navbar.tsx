import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, PenTool, Layout, Globe, Activity, BookType, Star, Languages, MapPin, FileText, Video, Headphones, Image } from 'lucide-react';
import { useState, useEffect } from 'react';
import { lessons } from '../../data/content';
import { useLanguage, Language } from '../../contexts/LanguageContext';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, visualMode } = useLanguage();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const levels = [
    { id: 'A1', color: 'bg-[#F2A93B]', text: 'text-white' },
    { id: 'A2', color: 'bg-[#E58C2C]', text: 'text-white' },
    { id: 'B1', color: 'bg-[#D34D3D]', text: 'text-white' },
    { id: 'B2', color: 'bg-[#C23333]', text: 'text-white' },
    { id: 'C1', color: 'bg-[#8EAC3E]', text: 'text-white' },
    { id: 'C2', color: 'bg-[#679133]', text: 'text-white' }
  ];

  const categories = [
    { name: 'Gramática', icon: <PenTool size={16} /> },
    { name: 'Vocabulario', icon: <BookType size={16} /> },
    { name: 'Funciones', icon: <Activity size={16} /> },
    { name: 'Exámenes', icon: <Layout size={16} /> },
    { name: 'Ortografía', icon: <BookOpen size={16} /> },
    { name: 'Cultura', icon: <Globe size={16} /> }
  ];

  const recursos = [
    { name: 'Lecturas', icon: <FileText size={16} />, path: '/recursos/lecturas' },
    { name: 'Videos', icon: <Video size={16} />, path: '/recursos/videos' },
    { name: 'Audios', icon: <Headphones size={16} />, path: '/recursos/audios' },
    { name: 'Glosario', icon: <BookOpen size={16} />, path: '/glosario' },
  ];

  const recommendedLessons = lessons.slice(0, 3);
  
  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'uk', label: 'Українська' },
    { code: 'fr', label: 'Français' },
  ];

  // Determine the contextual navigation button
  const getNavButton = () => {
    if (currentPath === '/recursos-malaga') {
      return { to: '/aula-virtual', label: 'Aula Virtual', icon: <BookOpen size={18} /> };
    }
    if (currentPath === '/aula-virtual' || currentPath.startsWith('/nivel') || currentPath.startsWith('/leccion')) {
      return { to: '/recursos-malaga', label: 'Recursos Málaga', icon: <MapPin size={18} /> };
    }
    // Landing page or other
    return { to: '/aula-virtual', label: 'Aula Virtual', icon: <BookOpen size={18} /> };
  };

  const navButton = getNavButton();

  return (
    <>
      <nav className="bg-white border-b-2 relative z-40" style={{ borderBottomColor: '#F5A623' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative">
            <div className="flex items-center w-1/3">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-stone-600 hover:text-[#00823B] focus:outline-none bg-stone-100 p-2 rounded-xl transition-colors"
                aria-label="Abrir menú"
              >
                <Menu size={28} />
              </button>
            </div>
            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-auto">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 group whitespace-nowrap">
                <img src="/images/logo.png" alt="Asha-Kiran Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-lg sm:text-xl font-black tracking-widest text-[#00823B] uppercase">Asha-Kiran</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-stone-400 font-medium mt-0.5">Vínculos - Málaga</span>
                </div>
              </Link>
            </div>
            
            <div className="flex flex-1 justify-end w-1/3 items-center gap-3 md:gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 p-2 text-stone-600 hover:text-[#00823B] bg-stone-100 rounded-xl transition-colors"
                  aria-label="Seleccionar idioma de traducción"
                >
                  <Languages size={20} />
                  <span className="hidden md:inline-block text-xs font-bold uppercase tracking-wider">{language}</span>
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white border border-stone-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                          language === lang.code ? 'bg-[#00823B] text-white' : 'text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                to={navButton.to}
                className="hidden md:flex px-5 py-2 bg-[#00823B] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-[#006A30] transition-all cursor-pointer"
              >
                {navButton.label}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-stone-900/50 z-50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Drawer Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
             <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-white shadow-sm border border-stone-100 rounded-lg overflow-hidden shrink-0">
                   <img src="/images/logo.png" alt="Asha-Kiran" className="w-full h-full object-contain" />
                </div>
                <span className="text-lg font-black tracking-tight text-[#00823B]">VÍNCULOS</span>
             </Link>
             <button 
               onClick={() => setIsMenuOpen(false)}
               className="p-2 bg-stone-100 hover:bg-stone-200 rounded-xl text-stone-600 transition-colors"
             >
               <X size={20} />
             </button>
          </div>

          {/* Niveles */}
          <div className="mb-6">
            <h3 className="text-xs font-black text-stone-400 uppercase tracking-widest mb-4">Niveles</h3>
            <div className="flex gap-2 flex-wrap">
              {levels.map(lvl => (
                <Link 
                  key={lvl.id}
                  to={`/nivel/${lvl.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-110 ${lvl.color} ${lvl.text}`}
                >
                  {lvl.id}
                </Link>
              ))}
            </div>
          </div>

          {/* Recursos */}
          <div className="mb-6">
            <h3 className="text-xs font-black text-stone-400 uppercase tracking-widest mb-4">Recursos</h3>
            <div className="grid grid-cols-2 gap-2">
              {recursos.map((rec, idx) => (
                <Link
                  key={idx}
                  to={rec.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-stone-50 text-stone-700 text-sm font-medium transition-colors border border-transparent hover:border-stone-100"
                >
                  <span className="text-[#00823B]">{rec.icon}</span>
                  <span>{rec.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Categorías */}
          <div className="mb-6">
            <h3 className="text-xs font-black text-stone-400 uppercase tracking-widest mb-4">Categorías</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  to="#" 
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-stone-50 text-stone-700 text-sm font-medium transition-colors border border-transparent hover:border-stone-100"
                >
                  <span className="text-[#00823B]">{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recommended Lessons */}
          <div className="mb-8">
             <h3 className="text-xs font-black text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
               <Star size={14} className="text-[#F5A623]" />
               Recomendados
             </h3>
             <ul className="space-y-3">
               {recommendedLessons.map((lesson) => (
                 <li key={lesson.id}>
                    <Link 
                      to={`/leccion/${lesson.id}`} 
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100"
                    >
                      <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden shadow-sm relative" style={{ backgroundColor: lesson.color || '#f4fbf6' }}>
                        {(() => {
                          const displayImg = visualMode === 'illustration' 
                            ? (lesson.illustrationUrl || lesson.imageUrl) 
                            : (lesson.imageUrl || lesson.illustrationUrl);
                          if (displayImg) {
                            return <img src={displayImg} alt="" className="w-full h-full object-cover" />;
                          }
                          return <span className="text-2xl drop-shadow-sm absolute inset-0 flex items-center justify-center">{lesson.emoji || '📚'}</span>;
                        })()}
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-sm font-bold text-[#3C3633] leading-tight group-hover:text-[#00823B] transition-colors line-clamp-1">{lesson.title}</span>
                        <span className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider">Nivel {lesson.level} • {lesson.category}</span>
                      </div>
                    </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Bottom contextual nav button */}
          <div className="mt-auto pt-4 border-t border-stone-100">
             <Link 
               to={navButton.to}
               onClick={() => setIsMenuOpen(false)}
               className="flex items-center justify-center gap-2 w-full py-4 bg-[#00823B] text-white rounded-2xl font-bold shadow-md hover:bg-[#006A30] transition-colors"
             >
               {navButton.icon}
               <span>{navButton.label}</span>
             </Link>
          </div>

        </div>
      </div>
    </>
  );
}
