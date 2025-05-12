import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ActivityLayoutProps {
  children: ReactNode;
  className?: string;
}

export const ActivityLayout: React.FC<ActivityLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};