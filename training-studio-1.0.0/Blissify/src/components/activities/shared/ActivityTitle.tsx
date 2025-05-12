import React from 'react';

interface ActivityTitleProps {
  title: string;
}

export const ActivityTitle: React.FC<ActivityTitleProps> = ({ title }) => {
  return (
    <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
  );
};