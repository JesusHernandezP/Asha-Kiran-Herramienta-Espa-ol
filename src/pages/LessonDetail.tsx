import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { lessons } from '../data/content';
import { ArrowLeft, CheckCircle2, ChevronRight, XCircle, BookOpen } from 'lucide-react';
import { MemoryGame } from '../components/layout/MemoryGame';
import { FlashcardsGame } from '../components/layout/FlashcardsGame';
import { VocabularyQuiz } from '../components/layout/VocabularyQuiz';
import { useLanguage } from '../contexts/LanguageContext';

export function LessonDetail() {
  const { id } = useParams<{ id: string }>();
  const lesson = lessons.find(l => l.id === id);
  const { language } = useLanguage();

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleImageError = (e: Event) => {
      const target = e.target as HTMLImageElement;
      if (target && target.tagName === 'IMG') {
        target.onerror = null;
        target.src = 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80';
      }
    };
    document.addEventListener('error', handleImageError, true);
    return () => {
      document.removeEventListener('error', handleImageError, true);
    };
  }, [id]);

  if (!lesson) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Lección no encontrada</h2>
        <Link to="/" className="mt-4 inline-block text-orange-500 hover:text-orange-600 font-semibold">
          &larr; Volver al inicio
        </Link>
      </div>
    );
  }

  const handleSelectAnswer = (exerciseId: string, optIndex: number) => {
    if (showResults) return; // Prevent changing answers after checking
    setAnswers(prev => ({ ...prev, [exerciseId]: optIndex }));
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
  };

  const score = lesson.exercises?.reduce((acc, ex) => {
    return acc + (answers[ex.id] === ex.correctAnswer ? 1 : 0);
  }, 0) || 0;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to={`/nivel/${lesson.level}`} className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-[#00823B] mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Volver a Nivel {lesson.level}
      </Link>

      <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden mb-12">
        <div className="h-48 sm:h-64 w-full relative">
          {lesson.emoji ? (
            <div className="w-full h-full flex flex-col items-center justify-center" style={{ backgroundColor: lesson.color || '#f4fbf6' }}>
              <span className="text-7xl sm:text-8xl drop-shadow-md mb-2">{lesson.emoji}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
          ) : lesson.imageUrl ? (
            <>
            <img 
              src={lesson.imageUrl} 
              alt={lesson.title} 
              className="w-full h-full object-cover" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full bg-[#f4fbf6] flex items-center justify-center">
              <BookOpen size={64} className="text-[#89C73A]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
          )}
          <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex gap-2 mb-3">
                <span className="bg-[#00823B] text-white font-bold px-3 py-1 rounded-full text-[10px] shadow uppercase tracking-tighter">
                  Nivel {lesson.level}
                </span>
                <span className="bg-white text-[#192A56] font-bold px-3 py-1 rounded-full text-[10px] shadow uppercase tracking-tighter">
                  {lesson.category}
                </span>
              </div>
            </div>
          </div>
        
        <div className="p-5 sm:p-8 md:p-12">
          {/* We use a prose class wrapper to style markdown, we need @tailwindcss/typography but we can do it manually or rely on standard tags if no typography plugin. We'll add custom styles since we didn't install the plugin. */}
          <div className="prose-custom prose prose-stone prose-lg sm:prose-xl max-w-none prose-p:leading-relaxed overflow-x-auto mb-12">
            <Markdown rehypePlugins={[rehypeRaw]}>{lesson.content}</Markdown>
          </div>
          
          {lesson.vocabulary && lesson.vocabulary.length > 0 && (
            <div className="mt-8 border-t border-stone-100 pt-8">
               <h2 className="text-2xl font-black text-[#192A56] mb-6">Vocabulario y Juegos interactivos</h2>
               <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
                 {lesson.vocabulary.map((vocab, index) => {
                   const translatedText = vocab.translations?.[language] || vocab.translation;
                   return (
                   <div key={index} className="bg-white border rounded-2xl p-3 sm:p-4 text-center shadow-sm transition-colors flex flex-col items-center h-full" style={{ borderColor: vocab.color || '#E2E8F0' }}>
                     <div className="w-full aspect-square rounded-xl mb-2 sm:mb-3 flex items-center justify-center text-4xl sm:text-5xl" style={{ background: vocab.color || '#f4fbf6' }}>
                       {vocab.emoji}
                     </div>
                     <span className="font-bold text-[#3C3633] text-xs sm:text-sm leading-tight mt-auto">{vocab.word}</span>
                     {translatedText && <span className="text-[10px] sm:text-xs text-stone-500 mt-1">({translatedText})</span>}
                   </div>
                   );
                 })}
               </div>
               
               <div className="space-y-6">
                 <FlashcardsGame vocabulary={lesson.vocabulary} />
                 <VocabularyQuiz vocabulary={lesson.vocabulary} />
                 <MemoryGame vocabulary={lesson.vocabulary} />
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Exercises Section */}
      {lesson.exercises && lesson.exercises.length > 0 && (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-12">
          <h2 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">Ponte a prueba</h2>
          
          <div className="space-y-8">
            {lesson.exercises.map((ex, index) => (
              <div key={ex.id} className="bg-[#FAF9F6] rounded-2xl p-6 border border-stone-200">
                <h3 className="text-sm font-bold text-[#3C3633] mb-4">
                  {index + 1}. {ex.question}
                </h3>
                <div className="space-y-3">
                  {ex.options.map((opt, optIndex) => {
                    const isSelected = answers[ex.id] === optIndex;
                    const isCorrect = ex.correctAnswer === optIndex;
                    const showCorrectness = showResults;

                    let bgClass = "bg-white hover:bg-stone-50 border-stone-200";
                    let textClass = "text-stone-600";
                    let icon = null;

                    if (isSelected) {
                      bgClass = "bg-[#f4fbf6] border-[#00823B]/30";
                      textClass = "text-[#00823B] font-bold";
                    }

                    if (showCorrectness) {
                      if (isCorrect) {
                        bgClass = "bg-[#f4fbf6] border-[#00823B]/60";
                        textClass = "text-[#00823B] font-bold";
                        icon = <CheckCircle2 className="text-[#00823B]" size={20} />;
                      } else if (isSelected && !isCorrect) {
                        bgClass = "bg-red-50 border-red-200";
                        textClass = "text-red-700 line-through";
                        icon = <XCircle className="text-red-500" size={20} />;
                      } else {
                        bgClass = "bg-stone-50 border-stone-200 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={optIndex}
                        onClick={() => handleSelectAnswer(ex.id, optIndex)}
                        disabled={showResults}
                        className={`w-full text-left flex items-center justify-between px-5 sm:px-6 py-4 rounded-xl border transition-all min-h-[60px] active:scale-[0.99] shadow-sm text-base sm:text-lg ${bgClass} ${textClass}`}
                      >
                        <span className="flex-1">{opt}</span>
                        {icon && <span className="ml-3 shrink-0">{icon}</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 flex flex-col items-center">
            {!showResults ? (
              <button
                onClick={handleCheckAnswers}
                disabled={Object.keys(answers).length < lesson.exercises.length}
                className="px-6 py-3 bg-[#00823B] text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm hover:bg-[#006A30] disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                Comprobar respuestas
              </button>
            ) : (
              <div className="text-center w-full">
                <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-stone-200 inline-block mb-6 shadow-sm">
                  <p className="text-xl font-bold text-[#3C3633]">
                    Tu puntuación: <span className={score === lesson.exercises.length ? 'text-[#00823B]' : 'text-[#F5A623]'}>{score} / {lesson.exercises.length}</span>
                  </p>
                  {score === lesson.exercises.length ? (
                    <p className="text-[#00823B] font-medium mt-2 text-sm">¡Excelente trabajo!</p>
                  ) : (
                    <p className="text-[#F5A623] font-medium mt-2 text-sm">Buen intento, sigue practicando.</p>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => {
                        setAnswers({});
                        setShowResults(false);
                    }}
                    className="text-[11px] font-bold uppercase tracking-widest text-stone-400 hover:text-[#00823B] transition-colors"
                  >
                    Repetir ejercicio
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
