import { useParams, Link } from 'react-router-dom';
import { lessons, Level } from '../data/content';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LevelSection() {
  const { level } = useParams<{ level: string }>();
  const { visualMode } = useLanguage();
  
  // Validate level param or default to A1
  const validLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const validLevel = validLevels.includes(level || '') ? (level as Level) : 'A1';
  
  const levelLessons = lessons.filter(l => l.level === validLevel);

  // Group by category
  const categories = Array.from(new Set(levelLessons.map(l => l.category)));

  // Define full names for levels
  const levelNames: Record<Level, string> = {
    A1: 'Inicial',
    A2: 'Básico',
    B1: 'Intermedio',
    B2: 'Intermedio Alto',
    C1: 'Avanzado',
    C2: 'Maestría'
  };

  // Define colors for headers
  const levelColors: Record<Level, string> = {
    A1: 'bg-[#F2A93B]',
    A2: 'bg-[#E58C2C]',
    B1: 'bg-[#D34D3D]',
    B2: 'bg-[#C23333]',
    C1: 'bg-[#8EAC3E]',
    C2: 'bg-[#679133]'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl font-bold text-[#3C3633] flex items-center gap-3">
          <span className={`${levelColors[validLevel]} text-white w-12 h-12 flex items-center justify-center rounded-xl shadow-sm text-xl font-bold shrink-0`}>
            {validLevel}
          </span>
          {levelNames[validLevel]}
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-sm text-stone-500">
          Explora los contenidos agrupados por categorías para el Nivel {validLevel}. Ideal para la pantalla de tu móvil.
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-10 sm:mb-12">
          <h2 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 sm:mb-6 border-b border-stone-200 pb-2">
            {category}
          </h2>
          
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 md:grid-cols-2">
             {levelLessons.filter(l => l.category === category).map(lesson => {
               const displayImg = visualMode === 'illustration' ? (lesson.illustrationUrl || lesson.imageUrl) : lesson.imageUrl;
               return (
                 <Link 
                   key={lesson.id} 
                   to={`/leccion/${lesson.id}`}
                   className="flex flex-row sm:flex-col bg-white border border-stone-200 rounded-2xl shadow-sm hover:border-[#00823B]/30 transition-colors overflow-hidden group active:scale-[0.98]"
                 >
                   <div className="w-1/3 sm:w-full h-auto sm:h-40 bg-[#f4fbf6] shrink-0 relative overflow-hidden flex-none">
                      {displayImg ? (
                        <img 
                         src={displayImg} 
                         alt={lesson.title} 
                         className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                         onError={(e) => {
                           const target = e.target as HTMLImageElement;
                           target.onerror = null; 
                           target.src = "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80";
                         }}
                        />
                      ) : lesson.emoji ? (
                       <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundColor: lesson.color || '#f4fbf6' }}>
                         <span className="text-5xl drop-shadow-sm">{lesson.emoji}</span>
                       </div>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-[#89C73A] min-h-[100px]">
                          <BookOpen size={28} className="sm:w-8 sm:h-8" />
                        </div>
                      )}
                   </div>
                   <div className="p-4 w-2/3 sm:w-full flex flex-col justify-center">
                     <h3 className="font-bold text-[#3C3633] text-base sm:text-sm mb-1 leading-tight">{lesson.title}</h3>
                     <p className="text-stone-500 text-sm sm:text-xs line-clamp-2">{lesson.description}</p>
                   </div>
                 </Link>
               );
             })}
          </div>
        </div>
      ))}
      
      {levelLessons.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 text-stone-500 shadow-sm">
          Aún no hay lecciones disponibles para este nivel.
        </div>
      )}
    </div>
  );
}
