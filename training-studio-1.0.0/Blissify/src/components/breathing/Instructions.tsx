import React from 'react';
import { motion } from 'framer-motion';

interface InstructionsProps {
  currentInstruction: string;
}

export const Instructions: React.FC<InstructionsProps> = ({ currentInstruction }) => {
  return (
    <motion.div
      key={currentInstruction}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-4"
    >
      <p className="text-lg text-gray-700">{currentInstruction}</p>
    </motion.div>
  );
};