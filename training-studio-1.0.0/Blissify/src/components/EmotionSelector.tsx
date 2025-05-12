import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Frown, Brain, Coffee, Heart } from 'lucide-react';
import type { Emotion } from '../types';

interface EmotionSelectorProps {
  selectedEmotion: Emotion | null;
  onSelect: (emotion: Emotion) => void;
}

const emotions = [
  { 
    name: 'happy' as Emotion, 
    icon: Smile, 
    color: 'bg-yellow-100 hover:bg-yellow-200', 
    tooltip: 'Feeling joyful and content' 
  },
  { 
    name: 'sad' as Emotion, 
    icon: Frown, 
    color: 'bg-blue-100 hover:bg-blue-200', 
    tooltip: 'Feeling down or unhappy' 
  },
  { 
    name: 'stressed' as Emotion, 
    icon: Brain, 
    color: 'bg-red-100 hover:bg-red-200', 
    tooltip: 'Feeling overwhelmed or tense' 
  },
  { 
    name: 'calm' as Emotion, 
    icon: Coffee, 
    color: 'bg-green-100 hover:bg-green-200', 
    tooltip: 'Feeling relaxed and at ease' 
  },
  { 
    name: 'anxious' as Emotion, 
    icon: Heart, 
    color: 'bg-purple-100 hover:bg-purple-200', 
    tooltip: 'Feeling nervous or uneasy' 
  },
];

export const EmotionSelector: React.FC<EmotionSelectorProps> = ({ selectedEmotion, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {emotions.map(({ name, icon: Icon, color, tooltip }) => (
        <motion.div
          key={name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <motion.button
            onClick={() => onSelect(name)}
            className={`${color} ${
              selectedEmotion === name 
                ? 'ring-4 ring-offset-2 ring-blue-500' 
                : 'shadow-md'
            } p-6 rounded-xl flex flex-col items-center transition-all duration-200`}
          >
            <Icon 
              className={`w-10 h-10 mb-2 ${
                selectedEmotion === name ? 'text-blue-600' : 'text-gray-700'
              }`} 
            />
            <span className="capitalize text-gray-800">{name}</span>
          </motion.button>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute top-full mt-2 bg-gray-800 text-white text-sm rounded-md p-2 shadow-lg text-center w-32"
          >
            {tooltip}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};