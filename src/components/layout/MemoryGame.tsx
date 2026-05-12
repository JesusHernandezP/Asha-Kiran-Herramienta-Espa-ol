import React, { useState, useEffect } from 'react';
import { VocabularyItem } from '../../data/content';
import { motion, AnimatePresence } from 'motion/react';

interface MemoryCard {
  id: string;
  type: 'word' | 'emoji';
  content: string;
  matchId: string;
  isFlipped: boolean;
  isMatched: boolean;
  color?: string;
}

export function MemoryGame({ vocabulary }: { vocabulary: VocabularyItem[] }) {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!vocabulary || vocabulary.length === 0) return;
    
    // Initialize cards
    const initialCards: MemoryCard[] = [];
    vocabulary.forEach((item, index) => {
      initialCards.push({
        id: `word-${index}`,
        type: 'word',
        content: item.word,
        matchId: `match-${index}`,
        isFlipped: false,
        isMatched: false,
      });
      initialCards.push({
        id: `emoji-${index}`,
        type: 'emoji',
        content: item.emoji,
        matchId: `match-${index}`,
        isFlipped: false,
        isMatched: false,
        color: item.color,
      });
    });

    // Shuffle
    setCards(initialCards.sort(() => Math.random() - 0.5));
    setMatches(0);
    setFlippedIndices([]);
  }, [vocabulary]);

  const handleCardClick = (index: number) => {
    if (isLocked) return;
    if (cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      setIsLocked(true);
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (newCards[firstIndex].matchId === newCards[secondIndex].matchId && newCards[firstIndex].type !== newCards[secondIndex].type) {
        // Match!
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[firstIndex].isMatched = true;
          matchedCards[secondIndex].isMatched = true;
          setCards(matchedCards);
          setMatches(m => m + 1);
          setFlippedIndices([]);
          setIsLocked(false);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const flippedBackCards = [...newCards];
          flippedBackCards[firstIndex].isFlipped = false;
          flippedBackCards[secondIndex].isFlipped = false;
          setCards(flippedBackCards);
          setFlippedIndices([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  if (!vocabulary || vocabulary.length === 0) return null;

  const isWin = matches === vocabulary.length && vocabulary.length > 0;

  return (
    <div className="bg-stone-50 rounded-2xl p-4 sm:p-6 border border-stone-200 mt-6 relative overflow-hidden">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#192A56] uppercase tracking-wide">Juego de Memoria</h3>
          <p className="text-sm text-stone-500">Encuentra las parejas (palabra y dibujo).</p>
        </div>
        <div className="bg-white px-3 py-1 rounded-full border border-stone-200 text-sm font-bold text-[#00823B]">
          {matches} / {vocabulary.length}
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mt-4" style={{ perspective: '1000px' }}>
        {cards.map((card, index) => {
          const flipped = card.isFlipped || card.isMatched;
          return (
            <motion.div
              key={card.id}
              layout
              className="relative aspect-[3/4] sm:aspect-square cursor-pointer rounded-xl"
              onClick={() => handleCardClick(index)}
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Front (Hidden) */}
              <div 
                className="absolute inset-0 bg-[#89C73A]/10 border-2 border-[#89C73A]/30 rounded-xl flex items-center justify-center shadow-sm"
                style={{ backfaceVisibility: 'hidden', display: flipped ? 'none' : 'flex' }}
              >
                <span className="text-3xl opacity-50">?</span>
              </div>
              
              {/* Back (Revealed) */}
              <div 
                className={`absolute inset-0 rounded-xl flex items-center justify-center p-2 shadow-sm border-2 ${
                  card.isMatched ? 'border-[#00823B] opacity-50' : 'border-[#192A56]/20 bg-white'
                }`}
                style={{ 
                  backfaceVisibility: 'hidden', 
                  transform: 'rotateY(180deg)',
                  backgroundColor: card.type === 'emoji' && !card.isMatched ? (card.color || '#f4fbf6') : 'white',
                  display: flipped ? 'flex' : 'none'
                }}
              >
                {card.type === 'emoji' ? (
                  <span className="text-4xl sm:text-5xl drop-shadow-sm">{card.content}</span>
                ) : (
                  <span className="text-sm sm:text-base font-bold text-center text-[#3C3633]">{card.content}</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {isWin && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl"
          >
            <span className="text-6xl mb-4">🏆</span>
            <h3 className="text-2xl font-black text-[#00823B] uppercase mb-2">¡Genial!</h3>
            <p className="text-stone-600 mb-4 font-bold">Has encontrado todas las parejas.</p>
            <button 
              onClick={() => {
                setCards(cards.sort(() => Math.random() - 0.5).map(c => ({...c, isFlipped: false, isMatched: false})));
                setMatches(0);
              }}
              className="bg-[#F5A623] hover:bg-[#d48d1a] text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider"
            >
              Jugar de nuevo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
