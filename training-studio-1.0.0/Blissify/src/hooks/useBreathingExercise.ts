import { useState, useEffect, useCallback } from 'react';
import { speak } from '../utils/textToSpeech';

interface UseBreathingExerciseProps {
  duration: number;
  inhaleTime: number;
  exhaleTime: number;
  instructions: string[];
  onComplete?: () => void;
}

export const useBreathingExercise = ({
  duration,
  inhaleTime,
  exhaleTime,
  instructions,
  onComplete,
}: UseBreathingExerciseProps) => {
  const [isInhaling, setIsInhaling] = useState(true);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);

  const speakInstruction = useCallback((text: string) => {
    if (audioEnabled) {
      speak(text, 0.9);
    }
  }, [audioEnabled]);

  useEffect(() => {
    // Initial instruction
    speakInstruction(instructions[0]);

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Breathing cycle
    const breathingTimer = setInterval(() => {
      setIsInhaling((prev) => {
        const nextState = !prev;
        speakInstruction(nextState ? 'Breathe in deeply' : 'Now breathe out slowly');
        return nextState;
      });
    }, (inhaleTime + exhaleTime) * 1000);

    // Instruction cycle
    const instructionTimer = setInterval(() => {
      setCurrentInstructionIndex((prev) => {
        const nextIndex = (prev + 1) % instructions.length;
        speakInstruction(instructions[nextIndex]);
        return nextIndex;
      });
    }, 15000);

    return () => {
      clearInterval(timer);
      clearInterval(breathingTimer);
      clearInterval(instructionTimer);
      window.speechSynthesis.cancel();
    };
  }, [
    duration,
    inhaleTime,
    exhaleTime,
    instructions,
    onComplete,
    speakInstruction,
  ]);

  const toggleAudio = () => {
    setAudioEnabled((prev) => {
      if (prev) {
        window.speechSynthesis.cancel();
      } else {
        speak(instructions[currentInstructionIndex]);
      }
      return !prev;
    });
  };

  return {
    isInhaling,
    timeLeft,
    audioEnabled,
    currentInstruction: instructions[currentInstructionIndex],
    toggleAudio,
  };
};