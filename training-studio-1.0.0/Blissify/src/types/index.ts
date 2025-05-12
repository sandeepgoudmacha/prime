export type Emotion = 'happy' | 'sad' | 'stressed' | 'calm' | 'anxious';

export interface Activity {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'meditation' | 'exercise' | 'gaming' | 'music';
  emotions: Emotion[];
  steps?: string[];
}

export interface User {
  email: string;
  name: string;
}

export interface EmotionLog {
  emotion: Emotion;
  timestamp: Date;
  note?: string;
}