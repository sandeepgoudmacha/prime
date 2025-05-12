import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sun, Moon, Cloud, Music, Coffee, Book } from 'lucide-react';
import type { Activity } from '../../types';
import { ExitButton } from '../../components/activities/shared/ExitButton';

interface GamingActivityProps {
  activity: Activity;
}

interface Card {
  id: number;
  icon: React.FC<{ className?: string }>;
  isFlipped: boolean;
  isMatched: boolean;
}

const icons = [Heart, Star, Sun, Moon, Cloud, Music, Coffee, Book];

const createDeck = () => {
  const cards: Card[] = [];
  icons.forEach((icon, index) => {
    // Create pairs of cards
    cards.push(
      { id: index * 2, icon, isFlipped: false, isMatched: false },
      { id: index * 2 + 1, icon, isFlipped: false, isMatched: false }
    );
  });
  return shuffleArray(cards);
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const GamingActivity: React.FC<GamingActivityProps> = ({ activity }) => {
  const [cards, setCards] = useState<Card[]>(createDeck());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard?.icon === secondCard?.icon) {
        // Match found
        setCards(prev =>
          prev.map(card =>
            card.id === first || card.id === second
              ? { ...card, isMatched: true }
              : card
          )
        );
        setMatches(prev => prev + 1);
        setFlippedCards([]);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === first || card.id === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matches === icons.length) {
      setIsGameComplete(true);
    }
  }, [matches]);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(id)) return;

    setCards(prev =>
      prev.map(card =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards(prev => [...prev, id]);
  };

  const resetGame = () => {
    setCards(createDeck());
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsGameComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 relative">
      <ExitButton />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          <h1 className="text-3xl font-bold text-center mb-8">{activity.title}</h1>
          
          <div className="flex justify-between mb-6">
            <p className="text-lg">Moves: {moves}</p>
            <p className="text-lg">Matches: {matches}/{icons.length}</p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <AnimatePresence>
              {cards.map(card => (
                <motion.div
                  key={card.id}
                  whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
                  whileTap={{ scale: card.isMatched ? 1 : 0.95 }}
                  className={`aspect-square rounded-xl shadow-md cursor-pointer transition-all ${
                    card.isMatched
                      ? 'bg-green-100'
                      : card.isFlipped
                      ? 'bg-blue-100'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => !card.isMatched && handleCardClick(card.id)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {(card.isFlipped || card.isMatched) && (
                      <card.icon className="w-8 h-8 text-gray-600" />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {isGameComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Congratulations! 🎉
              </h2>
              <p className="text-gray-600 mb-6">
                You completed the game in {moves} moves!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetGame}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Play Again
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};