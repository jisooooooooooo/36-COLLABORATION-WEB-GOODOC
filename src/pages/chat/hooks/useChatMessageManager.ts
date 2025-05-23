import { useEffect, useRef, useState } from 'react';
import { useUserStartTime } from './useUserStartTime';

export interface Message {
  text: string;
  timestamp: string;
}

type Phase = 'none' | 'medication' | 'image';

export const useChatMessageManager = (messages: string[], phase: Phase) => {
  const [initialMessages, setInitialMessages] = useState<Message[]>([]);
  const [medicationMessages, setMedicationMessages] = useState<Message[]>([]);
  const prevMessagesLengthRef = useRef<number>(0);
  const { getCurrentTime } = useUserStartTime();

  useEffect(() => {
    if (messages.length > prevMessagesLengthRef.current) {
      const newMessages = messages.slice(prevMessagesLengthRef.current);
      const newFormattedMessages = newMessages.map(msg => ({
        text: msg,
        timestamp: getCurrentTime(),
      }));

      if (phase === 'medication') {
        setMedicationMessages(prev => [...prev, ...newFormattedMessages]);
      } else {
        setInitialMessages(prev => [...prev, ...newFormattedMessages]);
      }

      prevMessagesLengthRef.current = messages.length;
    }
  }, [messages, getCurrentTime, phase]);

  return {
    initialMessages,
    medicationMessages,
  };
};
