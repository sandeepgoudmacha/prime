import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Clock, Music, Gamepad, Heart, Dumbbell } from 'lucide-react';
import type { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
}

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'meditation':
      return Heart;
    case 'exercise':
      return Dumbbell;
    case 'gaming':
      return Gamepad;
    case 'music':
      return Music;
    default:
      return Heart;
  }
};

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const navigate = useNavigate();
  const Icon = getActivityIcon(activity.type);

  const handleClick = () => {
    navigate(`/activity/${activity.type}/${activity.id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg cursor-pointer transform transition-all hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-200 hover:to-blue-300"
    >
      <div className="flex items-center mb-4">
        <motion.div
          whileHover={{ scale: 1.3, rotate: 15 }}
          className="bg-blue-500 text-white p-2 rounded-full shadow-md flex items-center justify-center"
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-800 ml-4 hover:text-blue-700 transition-colors">
          {activity.title}
        </h3>
      </div>
      <motion.p
        whileHover={{ x: 5 }}
        className="text-gray-600 mb-4 leading-relaxed"
      >
        {activity.description}
      </motion.p>
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-1" />
        <span>{activity.duration}</span>
      </div>
    </motion.div>
  );
};
