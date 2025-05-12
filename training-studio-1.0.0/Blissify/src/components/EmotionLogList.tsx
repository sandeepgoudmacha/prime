import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen } from 'lucide-react';
import type { EmotionLog } from '../types';

interface EmotionLogListProps {
  logs: EmotionLog[];
}

export const EmotionLogList: React.FC<EmotionLogListProps> = ({ logs }) => {
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  if (logs.length === 0) {
    return (
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold">Emotion Log</h2>
        </div>
        <p className="text-gray-600 text-center">No emotions logged yet today.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Today's Emotion Log</h2>
      </div>
      
      <div className="space-y-4">
        {logs.map((log, index) => (
          <motion.div
            key={log.timestamp.getTime()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="capitalize font-medium text-gray-800">
                {log.emotion}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {formatTime(log.timestamp)}
              </div>
            </div>
            {log.note && (
              <p className="text-gray-600 text-sm">{log.note}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};