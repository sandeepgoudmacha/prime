import React from 'react';
import { motion } from 'framer-motion';
import { Award, RefreshCw } from 'lucide-react';

interface CompletionMessageProps {
  onRestart?: () => void;
}

export const CompletionMessage: React.FC<CompletionMessageProps> = ({ onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center bg-green-50 p-6 rounded-xl shadow-lg"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
        className="inline-block mb-4"
      >
        <Award className="w-12 h-12 text-green-500" />
      </motion.div>
      
      <h3 className="text-2xl font-bold text-green-700 mb-2">
        Great job! 🎉
      </h3>
      
      <p className="text-green-600 mb-6">
        You've completed this exercise. Remember, consistent practice leads to better mental well-being.
      </p>

      {onRestart && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="flex items-center justify-center space-x-2 mx-auto px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Start Again</span>
        </motion.button>
      )}
    </motion.div>
  );
};