import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Volume2 } from 'lucide-react';
import { speakSpanish } from '../../utils/speech';
import { useLanguage } from '../../contexts/LanguageContext';
import { lessonTranslations } from '../../data/lessonTranslations';

export function ListeningQuiz({ vocabulary }: { vocabulary: VocabularyItem[] }) {
  const { language, visualMode } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play audio automatically when the question changes
  useEffect(() => {
    if (vocabulary && vocabulary.length > 0 && !isFinished) {
      generateQuestion();
      // Delay slightly for transition smoothly
      const timer = setTimeout(() => {
        playWordAudio();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentQuestion, vocabulary, isFinished]);

  const generateQuestion = () => {
    if (!vocabulary || vocabulary.length < 2) return;

    const currentWord = vocabulary[currentQuestion].word;
    const allOtherWords = vocabulary
      .filter((_, idx) => idx !== currentQuestion)
      .map(v => v.word);

    // Shuffle and pick 3 wrong options
    const shuffledOthers = allOtherWords.sort(() => Math.random() - 0.5);
    const wrongOptions = shuffledOthers.slice(0, Math.min(3, shuffledOthers.length));

    // Combine and shuffle
    const allOptions = [...wrongOptions, currentWord].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
    setSelectedAnswer(null);
  };

  const playWordAudio = () => {
    if (!vocabulary || vocabulary.length === 0) return;
    setIsPlaying(true);
    speakSpanish(vocabulary[currentQuestion].word);
    
    // Reset play animation after 1 second
    setTimeout(() => {
      setIsPlaying(false);
    }, 1000);
  };

  const handleSelect = (option: string) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    setSelectedAnswer(option);

    if (option === vocabulary[currentQuestion].word) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < vocabulary.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelectedAnswer(null);
  };

  if (!vocabulary || vocabulary.length < 2) return null;

  const currentItem = vocabulary[currentQuestion];
  const translationToShow = currentItem.translations?.[language] || currentItem.translation || '';
  const t = lessonTranslations[language];

  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-200 mt-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#192A56] uppercase tracking-wide flex items-center gap-2">
            <Volume2 className="text-[#00823B]" />
            {t.listeningQuizHeader}
          </h3>
          <p className="text-sm text-stone-500">{t.listeningQuizSub}</p>
        </div>
        {!isFinished && (
          <div className="bg-[#f4fbf6] px-3 py-1 rounded-full border border-[#00823B]/20 text-sm font-bold text-[#00823B]">
            {currentQuestion + 1} / {vocabulary.length}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Audio speaker button */}
            <motion.button
              onClick={playWordAudio}
              className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-md border-2 transition-all active:scale-95 ${
                isPlaying 
                  ? 'bg-[#00823B] border-[#00823B] text-white' 
                  : 'bg-[#f4fbf6] border-[#00823B]/30 text-[#00823B] hover:bg-[#eaf8ee]'
              }`}
              animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
            >
              <Volume2 size={48} className={isPlaying ? 'animate-pulse' : ''} />
            </motion.button>

            <span className="text-xs text-[#00823B] font-bold uppercase tracking-widest mb-6">
              {t.clickToListen}
            </span>

            {/* Answer Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {options.map((option, idx) => {
                const isCorrect = option === currentItem.word;
                const isSelected = selectedAnswer === option;

                let btnClass = "w-full text-center p-4 rounded-xl font-bold transition-all border-2 ";
                let content = <span className="flex-1">{option}</span>;

                if (selectedAnswer !== null) {
                  if (isCorrect) {
                    btnClass += "bg-[#f4fbf6] border-[#00823B] text-[#00823B]";
                    content = (
                      <>
                        <span className="flex-1">{option}</span>
                        <CheckCircle2 size={20} className="ml-2 shrink-0" />
                      </>
                    );
                  } else if (isSelected && !isCorrect) {
                    btnClass += "bg-red-50 border-red-400 text-red-700";
                    content = (
                      <>
                        <span className="flex-1 line-through">{option}</span>
                        <XCircle size={20} className="ml-2 shrink-0" />
                      </>
                    );
                  } else {
                    btnClass += "bg-stone-50 border-stone-200 text-stone-400 opacity-50";
                  }
                } else {
                  btnClass += "bg-white border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-50";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(option)}
                    disabled={selectedAnswer !== null}
                    className={btnClass + " flex items-center justify-center active:scale-95 transition-transform duration-100"}
                  >
                    {content}
                  </button>
                );
              })}
            </div>

            {/* Hint & Translation Reinforcement */}
            {selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#f8fafc] border border-slate-200 rounded-xl"
              >
                <div className="flex items-center gap-3 self-start sm:self-center">
                  <div className="text-3xl shrink-0">
                    {(() => {
                      const displayImg = visualMode === 'illustration' ? currentItem.illustrationUrl : currentItem.imageUrl;
                      if (displayImg) {
                        return <img src={displayImg} alt={currentItem.word} className="w-10 h-10 object-contain rounded" />;
                      }
                      return currentItem.emoji;
                    })()}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#192A56] text-sm">
                      {currentItem.word}
                    </h4>
                    {translationToShow && (
                      <p className="text-xs text-stone-500 font-medium">
                        {t.translationLabel}: <span className="text-[#00823B] font-bold">{translationToShow}</span>
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto px-6 py-3 bg-[#00823B] hover:bg-[#006e32] text-white font-bold rounded-full uppercase tracking-wider flex items-center justify-center gap-2 transition-colors active:scale-95"
                >
                  {currentQuestion < vocabulary.length - 1 ? t.next : t.finish}
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#f4fbf6] text-[#00823B] mb-6">
              <span className="text-4xl">🏆</span>
            </div>
            <h3 className="text-2xl font-black text-[#192A56] uppercase mb-2">{t.completed}</h3>
            <p className="text-stone-600 mb-6 font-bold text-lg">
              {t.yourScore} <span className={score >= vocabulary.length / 2 ? "text-[#00823B]" : "text-[#F5A623]"}>{score} / {vocabulary.length}</span>
            </p>

            <button
              onClick={restartQuiz}
              className="bg-[#F5A623] hover:bg-[#d48d1a] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 mx-auto active:scale-95 transition-transform"
            >
              <RotateCcw size={18} />
              {t.tryAgain}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

