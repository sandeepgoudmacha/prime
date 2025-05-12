import React from 'react';
import { useParams } from 'react-router-dom';
import { activities } from '../data/activities';
import { MeditationActivity } from './activities/MeditationActivity';
import { MusicActivity } from './activities/MusicActivity';
import { GamingActivity } from './activities/GamingActivity';
import { ExerciseActivity } from './activities/ExerciseActivity';

export const ActivityPage: React.FC = () => {
  const { type, id } = useParams();
  const activity = activities.find(a => a.id === id);

  if (!activity) return <div>Activity not found</div>;

  const getActivityComponent = () => {
    switch (type) {
      case 'meditation':
        return <MeditationActivity activity={activity} />;
      case 'music':
        return <MusicActivity activity={activity} />;
      case 'gaming':
        return <GamingActivity activity={activity} />;
      case 'exercise':
        return <ExerciseActivity activity={activity} />;
      default:
        return <div>Unknown activity type</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {getActivityComponent()}
    </div>
  );
};