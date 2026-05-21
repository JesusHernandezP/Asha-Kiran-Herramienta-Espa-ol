import React, { useState } from 'react';
import { VocabularyItem } from '../../data/content';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function FlashcardsGame({ vocabulary }: { vocabulary: VocabularyItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { language } = useLanguage();

  if (!vocabulary || vocabulary.length === 0) return null;

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
    }, 150);
  };

  const currentCard = vocabulary[currentIndex];
  const translatedText = currentCard.translations?.[language] || currentCard.translation;

  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-200 mt-6 relative overflow-hidden shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#192A56] uppercase tracking-wide">Tarjetas de Vocabulario</h3>
          <p className="text-sm text-stone-500">Toca la tarjeta para ver la traducción.</p>
        </div>
        <div className="bg-[#f4fbf6] px-3 py-1 rounded-full border border-[#00823B]/20 text-sm font-bold text-[#00823B]">
          {currentIndex + 1} / {vocabulary.length}
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <div 
          className="w-full max-w-sm aspect-square cursor-pointer relative"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: '1000px' }}
        >
          <motion.div
            className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Front: Emoji */}
            <div 
              className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-6 shadow-md border-2 border-[#192A56]/10"
              style={{ 
                backfaceVisibility: 'hidden', 
                backgroundColor: currentCard.color || '#f4fbf6'
              }}
            >
              <div className="flex items-center justify-center mb-4">
                {currentCard.imageUrl ? (
                  <img src={currentCard.imageUrl} alt={currentCard.word} className="w-32 h-32 object-contain drop-shadow-sm rounded-sm" />
                ) : (
                  <span className="text-8xl sm:text-9xl drop-shadow-sm">{currentCard.emoji}</span>
                )}
              </div>
            </div>
            
            {/* Back: Word */}
            <div 
              className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-6 shadow-md border-2 border-[#00823B]/30"
              style={{ 
                backfaceVisibility: 'hidden', 
                transform: 'rotateY(180deg)'
              }}
            >
              <span className="text-3xl sm:text-4xl font-black text-[#192A56] text-center mb-2">{currentCard.word}</span>
              {translatedText && (
                <span className="text-lg sm:text-xl font-medium text-stone-500 text-center">{translatedText}</span>
              )}
            </div>
          </motion.div>
        </div>
        
        <div className="flex items-center gap-4 mt-8">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
             onClick={() => setIsFlipped(!isFlipped)}
             className="px-6 py-3 bg-[#00823B] hover:bg-[#006e32] text-white font-bold rounded-full uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            <RotateCcw size={18} />
            Voltear
          </button>
          
          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
