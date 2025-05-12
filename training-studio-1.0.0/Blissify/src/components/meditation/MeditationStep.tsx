import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MeditationStepProps {
  step: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export const MeditationStep: React.FC<MeditationStepProps> = ({
  step,
  isActive,
  isCompleted,
  onClick,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        onClick={onClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isActive ? 1 : 0.5,
          y: 0,
          scale: isActive ? 1 : 0.95,
        }}
        exit={{ opacity: 0, y: -20 }}
        className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
          isActive
            ? 'bg-blue-50 border-2 border-blue-200 shadow-lg'
            : isCompleted
            ? 'bg-green-50'
            : 'bg-gray-50 hover:bg-gray-100'
        }`}
      >
        <p className={`text-lg ${isActive ? 'font-semibold' : ''}`}>
          {step}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};