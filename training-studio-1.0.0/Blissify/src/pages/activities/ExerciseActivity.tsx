import React, { useState } from 'react';
import type { Activity } from '../../types';
import { ActivityLayout } from '../../components/activities/shared/ActivityLayout';
import { ActivityTitle } from '../../components/activities/shared/ActivityTitle';
import { AudioPlayer } from '../../components/audio/AudioPlayer';
import { ExitButton } from '../../components/activities/shared/ExitButton';

interface ExerciseActivityProps {
  activity: Activity;
}

const exercises = [
  { 
    id: '1', 
    title: 'Gentle Stretching', 
    duration: '1 minute', 
    audio: 'https://www.excelatlife.com/mp3/stretching.mp3' 
  },
  { 
    id: '2', 
    title: 'Mindful Breathing', 
    duration: '3 minutes', 
    audio: 'https://www.excelatlife.com/mp3/mindfulbreathing.mp3' 
  },
  { 
    id: '3', 
    title: 'Muscle Scan', 
    duration: '1 minute', 
    audio: 'https://www.excelatlife.com/mp3/musclescan.mp3' 
  },
  { 
    id: '4', 
    title: 'Autogenic Relaxation', 
    duration: '9 minutes', 
    audio: 'https://www.excelatlife.com/mp3/autogenics.mp3' 
  },
  { 
    id: '5', 
    title: 'Tense and Release', 
    duration: '1 minute', 
    audio: 'https://www.excelatlife.com/mp3/tenseandrelease.mp3' 
  },
];

export const ExerciseActivity: React.FC<ExerciseActivityProps> = ({ activity }) => {
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  const handleExerciseComplete = (id: string) => {
    if (!completedExercises.includes(id)) {
      setCompletedExercises([...completedExercises, id]);
    }
  };

  return (
    <ActivityLayout>
      <ExitButton />
      <ActivityTitle title={activity.title} />

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-4">
          {exercises.map((exercise) => (
            <AudioPlayer
              key={exercise.id}
              url={exercise.audio}
              title={exercise.title}
              duration={exercise.duration}
            />
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Tips for a Great Session:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Find a quiet, comfortable space</li>
            <li>Listen to your body and don't overexert</li>
            <li>Take breaks when needed</li>
            <li>Practice regularly for best results</li>
          </ul>
        </div>
      </div>
    </ActivityLayout>
  );
};