import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ExerciseCardProps {
  title: string;
  duration: string;
  completed: boolean;
  onComplete: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  duration,
  completed,
  onComplete,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`p-6 rounded-xl shadow-md cursor-pointer transition-colors ${
        completed ? 'bg-green-100' : 'bg-white'
      }`}
      onClick={onComplete}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{duration}</p>
        </div>
        {completed && <CheckCircle className="w-6 h-6 text-green-500" />}
      </div>
    </motion.div>
  );
};