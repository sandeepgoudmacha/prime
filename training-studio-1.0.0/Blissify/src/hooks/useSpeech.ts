import { useState, useCallback, useRef } from 'react';

export const useSpeech = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: string) => {
    if (!isEnabled || !window.speechSynthesis) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.lang = 'en-US';

    // Store reference to current utterance
    speechRef.current = utterance;

    // Speak
    window.speechSynthesis.speak(utterance);
  }, [isEnabled]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    speechRef.current = null;
  }, []);

  const toggleEnabled = useCallback(() => {
    setIsEnabled(prev => {
      if (prev) {
        stop();
      }
      return !prev;
    });
  }, [stop]);

  return {
    speak,
    stop,
    isEnabled,
    toggleEnabled
  };
};