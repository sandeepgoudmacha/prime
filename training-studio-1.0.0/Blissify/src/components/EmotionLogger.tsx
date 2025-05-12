import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { BookHeart } from 'lucide-react';
import type { Emotion, EmotionLog } from '../types';

interface EmotionLoggerProps {
  emotion: Emotion;
  onLog: (log: EmotionLog) => void;
}

export const EmotionLogger: React.FC<EmotionLoggerProps> = ({ emotion, onLog }) => {
  const { register, handleSubmit, reset } = useForm<{ note: string }>();

  const onSubmit = (data: { note: string }) => {
    onLog({
      emotion,
      timestamp: new Date(),
      note: data.note,
    });
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-lg mb-6"
    >
      <div className="flex items-center mb-4">
        <BookHeart className="w-6 h-6 text-blue-500 mr-2" />
        <h3 className="text-lg font-semibold">Log Your Emotions</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Add a note (optional)
          </label>
          <textarea
            {...register('note')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="How are you feeling? What triggered this emotion?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Save Entry
        </button>
      </form>
    </motion.div>
  );
};