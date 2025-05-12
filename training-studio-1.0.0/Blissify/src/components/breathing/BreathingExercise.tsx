import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { BreathingCircle } from './BreathingCircle';
import { Instructions } from './Instructions';
import { useBreathingExercise } from '../../hooks/useBreathingExercise';

interface BreathingExerciseProps {
  duration: number;
  inhaleTime: number;
  exhaleTime: number;
  instructions: string[];
  onComplete?: () => void;
}

export const BreathingExercise: React.FC<BreathingExerciseProps> = (props) => {
  const {
    isInhaling,
    timeLeft,
    audioEnabled,
    currentInstruction,
    toggleAudio,
  } = useBreathingExercise(props);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 relative">
      <button
        onClick={toggleAudio}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label={audioEnabled ? 'Disable audio' : 'Enable audio'}
      >
        {audioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      <div className="mb-8">
        <BreathingCircle
          isInhaling={isInhaling}
          inhaleTime={props.inhaleTime}
          exhaleTime={props.exhaleTime}
        />
      </div>

      <h3 className="text-2xl font-semibold mb-6">
        {isInhaling ? 'Breathe In' : 'Breathe Out'}
      </h3>

      <AnimatePresence mode="wait">
        <Instructions currentInstruction={currentInstruction} />
      </AnimatePresence>

      <div className="mt-6 text-gray-600">
        Time remaining: {timeLeft} seconds
      </div>
    </div>
  );
};