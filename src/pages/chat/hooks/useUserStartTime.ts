import { useState } from 'react';
import { formatTime } from '@/shared/utils/date';

export const useUserStartTime = () => {
  const [startTime, setStartTimeState] = useState<string>('');

  const setStartTime = () => {
    setStartTimeState(formatTime(new Date()));
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
