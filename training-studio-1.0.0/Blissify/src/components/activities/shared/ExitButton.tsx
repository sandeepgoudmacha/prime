import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const ExitButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/')}
      className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-red-100 transition-colors"
      aria-label="Exit"
    >
      <X className="w-6 h-6 text-gray-600" />
    </motion.button>
  );
};