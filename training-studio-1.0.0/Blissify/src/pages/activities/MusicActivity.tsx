import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Music } from 'lucide-react';
import { ActivityLayout } from '../../components/activities/shared/ActivityLayout';
import { ActivityTitle } from '../../components/activities/shared/ActivityTitle';
import { ExitButton } from '../../components/activities/shared/ExitButton';
import type { Activity } from '../../types';

const tracks = [
  {
    id: 1,
    title: 'Ocean Choir Meditation',
    url: 'https://raw.githubusercontent.com/prabhsharan1/RFM/main/ocean-choir-meditation-8234.mp3',
    duration: '17:59',
  },
  {
    id: 2,
    title: 'Sleepy Rain',
    url: 'https://raw.githubusercontent.com/prabhsharan1/RFM/main/sleepy-rain-116521.mp3',
    duration: '1:03',
  },
  {
    id: 3,
    title: 'Enchanted Forest',
    url: 'https://raw.githubusercontent.com/prabhsharan1/RFM/main/the-enchanted-forest-252441.mp3',
    duration: '3:50',
  },
];

export const MusicActivity: React.FC<{ activity: Activity }> = ({ activity }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTrackChange = async (index: number) => {
    if (audioRef.current) {
      // Pause the current track and reset playback
      try {
        await audioRef.current.pause();
      } catch (e) {
        console.warn('Error while pausing audio:', e);
      }
      audioRef.current.currentTime = 0;
      setCurrentTrack(index);
      audioRef.current.src = tracks[index].url;
      try {
        await audioRef.current.load(); // Ensure the new track is loaded
        await audioRef.current.play(); // Play the new track
        setIsPlaying(true);
      } catch (e) {
        console.error('Audio playback failed:', e);
        setIsPlaying(false);
      }
    }
  };

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          await audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying((prev) => !prev);
      } catch (e) {
        console.error('Audio playback failed:', e);
      }
    }
  };

  const nextTrack = () => handleTrackChange((currentTrack + 1) % tracks.length);

  const previousTrack = () =>
    handleTrackChange((currentTrack - 1 + tracks.length) % tracks.length);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
        setIsPlaying(false);
      });
    }
  }, [isPlaying]);

  return (
    <ActivityLayout>
      <ExitButton />
      <ActivityTitle title={activity.title} />

      <div className="space-y-8">
        {/* Current Track Display */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Music className="w-10 h-10 text-blue-500 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800">
              {tracks[currentTrack].title}
            </h3>
          </div>
          <p className="text-gray-600">{tracks[currentTrack].duration}</p>
        </motion.div>

        {/* Audio Controls */}
        <div className="flex justify-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={previousTrack}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <SkipBack className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTrack}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <SkipForward className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Track List */}
        <div className="space-y-4">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:bg-gray-50 ${
                index === currentTrack ? 'bg-blue-100 border-2 border-blue-300' : 'bg-white'
              }`}
              onClick={() => handleTrackChange(index)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-800">{track.title}</h4>
                  <p className="text-sm text-gray-600">{track.duration}</p>
                </div>
                {index === currentTrack && isPlaying && (
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: ['12px', '24px', '12px'] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1 bg-blue-500 rounded-full"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} />
      </div>
    </ActivityLayout>
  );
};
