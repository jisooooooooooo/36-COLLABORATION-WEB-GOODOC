/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
export function useAutoScrollToBottom(
  ref: React.RefObject<HTMLElement | null>,
  deps: unknown[] = []
) {
  useEffect(() => {
    const scroll = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const timeout = setTimeout(() => requestAnimationFrame(scroll), 0);
    return () => clearTimeout(timeout);
  }, deps);
}
