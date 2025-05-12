import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import type { Activity } from '../../types';
import { ActivityLayout } from '../../components/activities/shared/ActivityLayout';
import { ActivityTitle } from '../../components/activities/shared/ActivityTitle';
import { ExitButton } from '../../components/activities/shared/ExitButton';
import { MeditationStep } from '../../components/meditation/MeditationStep';
import { useSpeech } from '../../hooks/useSpeech';

interface MeditationActivityProps {
  activity: Activity;
}

export const MeditationActivity: React.FC<MeditationActivityProps> = ({ activity }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { speak, stop, isEnabled, toggleEnabled } = useSpeech();

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    if (activity.steps?.[index] && isEnabled) {
      speak(activity.steps[index]);
    }
  };

  return (
    <ActivityLayout>
      <ExitButton />
      <ActivityTitle title={activity.title} />

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Audio Control */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleEnabled}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            {isEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </motion.button>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {activity.steps?.map((step, index) => (
            <MeditationStep
              key={index}
              step={step}
              isActive={index === currentStep}
              isCompleted={index < currentStep}
              onClick={() => handleStepClick(index)}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {activity.steps?.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => handleStepClick(index)}
            />
          ))}
        </div>
      </div>
    </ActivityLayout>
  );
};