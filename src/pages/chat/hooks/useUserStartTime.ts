import { useState } from 'react';

export const useUserStartTime = () => {
  const [startTime, setStartTimeState] = useState<string>('');

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours < 12 ? '오전' : '오후';
    const displayHours = hours % 12 || 12;

    return `${period} ${displayHours}:${minutes}`;
  };

  const setStartTime = () => {
    const formattedTime = formatTime(new Date());
    setStartTimeState(formattedTime);
  };

  const getCurrentTime = (): string => {
    return formatTime(new Date());
  };

  const getStartTime = (): string => {
    return startTime;
  };

  return {
    getStartTime,
    setStartTime,
    getCurrentTime,
  };
};

export default useUserStartTime;
