import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RefreshCw } from 'lucide-react';

interface TimerProps {
  duration: number;
  onComplete: () => void;
}

export const Timer: React.FC<TimerProps> = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsActive(false);
            onComplete();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(duration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (timeLeft / duration) * 100;

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      {/* Timer Progress Bar */}
      <motion.div
        className="relative w-full max-w-md h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner"
        initial={{ width: '100%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'linear', duration: 1 }}
        />
      </motion.div>

      {/* Timer Display */}
      <motion.div
        className="text-5xl font-bold text-gray-800 tracking-wide"
        animate={{ scale: isActive ? 1.2 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {formatTime(timeLeft)}
      </motion.div>

      {/* Control Buttons */}
      <div className="flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTimer}
          className={`p-4 rounded-full shadow-lg focus:outline-none transition-colors ${
            isActive ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetTimer}
          className="p-4 rounded-full shadow-lg bg-gray-300 hover:bg-gray-400 text-gray-800"
        >
          <RefreshCw className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Encouraging Message */}
      <motion.p
        className="text-lg font-medium text-blue-600"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        {isActive ? 'Keep going! You’ve got this!' : 'Ready to begin?'}
      </motion.p>
    </div>
  );
};
