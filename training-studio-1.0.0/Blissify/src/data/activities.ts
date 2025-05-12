import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Deep Breathing',
    description: 'A simple deep breathing exercise to help you find calm and center yourself.',
    duration: '5 min',
    type: 'meditation',
    emotions: ['stressed', 'anxious'],
    steps: [
      'Find a comfortable position sitting or lying down',
      'Place one hand on your belly and one on your chest',
      'Breathe in slowly through your nose, feeling your belly expand',
      'Breathe out slowly through your nose, feeling your belly lower',
      'Repeat for 5-10 breaths'
    ]
  },
  {
    id: '2',
    title: 'Breath Focus',
    description: 'Use visualization and words to enhance your breathing practice.',
    duration: '10 min',
    type: 'meditation',
    emotions: ['stressed', 'anxious'],
    steps: [
      'Close your eyes and take deep breaths',
      'Imagine peaceful, calming air entering your body',
      'Visualize stress leaving as you exhale',
      'Use phrases like "I breathe in peace" and "I breathe out tension"',
      'Continue for 10-20 breaths'
    ]
  },
  {
    id: '3',
    title: 'Equal Breathing',
    description: 'Match the length of your inhales and exhales for balance.',
    duration: '5 min',
    type: 'meditation',
    emotions: ['stressed', 'anxious'],
    steps: [
      'Sit comfortably with your back straight',
      'Breathe in counting to 5',
      'Breathe out counting to 5',
      'Gradually increase the count as comfortable',
      'Practice for 5-10 minutes'
    ]
  },
  {
    id: '4',
    title: 'Progressive Relaxation',
    description: 'Combine breathing with muscle relaxation for deep calm.',
    duration: '15 min',
    type: 'exercise',
    emotions: ['stressed', 'anxious'],
    steps: [
      'Lie down comfortably',
      'Tense and relax each muscle group with your breath',
      'Start from your feet and move up to your face',
      'Hold tension for 5 seconds, then release',
      'Notice the feeling of relaxation in each area'
    ]
  },
  {
    id: '5',
    title: 'Calming Playlist',
    description: 'Soothing instrumental music to help you relax and unwind.',
    duration: '15 min',
    type: 'music',
    emotions: ['anxious', 'stressed']
  },
  {
    id: '6',
    title: 'Mindful Gaming',
    description: 'Take a break with some light puzzle games to shift your focus.',
    duration: '15 min',
    type: 'gaming',
    emotions: ['sad', 'stressed']
  }
];