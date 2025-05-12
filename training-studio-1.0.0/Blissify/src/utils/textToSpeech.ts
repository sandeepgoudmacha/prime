export const speak = (text: string, rate: number = 1) => {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.lang = 'en-US';
    utterance.volume = 1;
    utterance.pitch = 1;
    
    window.speechSynthesis.speak(utterance);
    
    return {
      stop: () => window.speechSynthesis.cancel(),
      pause: () => window.speechSynthesis.pause(),
      resume: () => window.speechSynthesis.resume(),
    };
  }
  return null;
};