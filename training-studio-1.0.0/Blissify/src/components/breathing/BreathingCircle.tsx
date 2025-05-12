import React from 'react';
import { motion } from 'framer-motion';
import { Wind } from 'lucide-react';

interface BreathingCircleProps {
  isInhaling: boolean;
  inhaleTime: number;
  exhaleTime: number;
}

export const BreathingCircle: React.FC<BreathingCircleProps> = ({
  isInhaling,
  inhaleTime,
  exhaleTime,
}) => {
  return (
    <motion.div
      animate={{
        scale: isInhaling ? 1.5 : 1,
        opacity: isInhaling ? 1 : 0.8,
      }}
      transition={{
        duration: isInhaling ? inhaleTime : exhaleTime,
        ease: "easeInOut",
      }}
      className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center"
    >
      <Wind className="w-16 h-16 text-blue-500" />
    </motion.div>
  );
};