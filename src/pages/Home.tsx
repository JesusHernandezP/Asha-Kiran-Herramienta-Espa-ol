import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Users, PlayCircle, Award, Sparkles } from 'lucide-react';
import { lessons } from '../data/content';

export function Home() {
  const levels = [
    { id: 'A1', label: 'Básico', color: 'bg-[#F2A93B]', text: 'text-white', description: 'Primeros pasos' },
    { id: 'A2', label: 'Básico', color: 'bg-[#E58C2C]', text: 'text-white', description: 'Conversación' },
    { id: 'B1', label: 'Intermedio', color: 'bg-[#D34D3D]', text: 'text-white', description: 'Independencia' },
    { id: 'B2', label: 'Intermedio', color: 'bg-[#C23333]', text: 'text-white', description: 'Fluidez' },
    { id: 'C1', label: 'Avanzado', color: 'bg-[#8EAC3E]', text: 'text-white', description: 'Eficacia' },
    { id: 'C2', label: 'Avanzado', color: 'bg-[#679133]', text: 'text-white', description: 'Maestría' }
  ];

  const features = [
    {
      title: 'Aprende a tu ritmo',
      description: 'Accede a las lecciones en cualquier momento y desde cualquier dispositivo. Adaptado totalmente a tus necesidades.',
      icon: <GraduationCap size={40} className="text-[#00823B]" />,
      color: 'bg-[#f4fbf6]'
    },
    {
      title: 'Contenido Visual',
      description: 'Aprende rápidamente con imágenes, pósters y material cuidadosamente diseñado para fijar los conocimientos.',
      icon: <Sparkles size={40} className="text-[#F5A623]" />,
      color: 'bg-[#fff9f0]'
    },
    {
      title: 'Ejercicios Interactivos',
      description: 'Pon en práctica lo aprendido con juegos, quizzes y ejercicios de pronunciación en cada nivel.',
      icon: <PlayCircle size={40} className="text-[#8EAC3E]" />,
      color: 'bg-[#f7faef]'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#fcfdfa] min-h-[calc(100vh-80px)] flex flex-col pt-6 pb-8 sm:pt-12 sm:pb-16 border-b border-stone-200 overflow-hidden relative">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2A93B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8EAC3E]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col flex-1 w-full justify-center relative z-10">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl tracking-tight font-black text-[#192A56] mb-3 sm:mb-4 leading-tight">
              Aprende español <span className="text-[#00823B] block sm:inline">paso a paso</span>
            </h1>
            <p className="max-w-xl mx-auto text-sm sm:text-lg text-stone-500 font-medium px-4">
              Elige tu nivel y empieza a aprender con la herramienta de Vínculos Asha-Kiran.
            </p>
          </div>
          
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 w-full max-w-4xl mx-auto px-1 sm:px-0">
            {levels.map((lvl) => (
              <Link
                key={lvl.id}
                to={`/nivel/${lvl.id}`}
                className={`group relative flex flex-col items-center justify-center p-3 sm:p-6 aspect-square sm:aspect-auto sm:h-40 rounded-2xl sm:rounded-[2rem] ${lvl.color} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                {/* Decorative shape */}
                <div className="absolute -right-4 -top-4 w-16 h-16 sm:w-20 sm:h-20 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none"></div>
                
                <span className={`text-3xl md:text-5xl font-black ${lvl.text} drop-shadow-sm mb-1 relative z-10 tracking-tighter`}>
                  {lvl.id}
                </span>
                <span className={`text-[8px] sm:text-xs font-bold ${lvl.text} opacity-90 mt-1 sm:mt-2 tracking-[0.2em] uppercase relative z-10 text-center`}>
                  {lvl.label}
                </span>
                <span className={`hidden sm:block text-[10px] font-medium ${lvl.text} opacity-75 mt-1 relative z-10 text-center`}>
                  {lvl.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Lessons */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6 sm:mb-8 text-center sm:text-left">¿Por qué usar Vínculos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#192A56] mb-3">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
