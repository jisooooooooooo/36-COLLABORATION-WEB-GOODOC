import { useRef } from 'react';
import { formatTime } from '@/shared/utils/date';

export function useUserStartTime() {
  const ref = useRef<string | null>(null);
  const getStartTime = () => ref.current ?? formatTime(new Date());
  const setStartTime = () => {
    ref.current = formatTime(new Date());
  };

  return { getStartTime, setStartTime };
}
