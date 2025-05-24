import { useRef } from 'react';
import ChatBubbleBot from '@/pages/chat/components/chatBox/ChatBubbleBot';
import { formatTime } from '@/shared/utils/date';

const ChatAnswerBox = ({ answer }: { answer: string }) => {
  const timeRef = useRef(formatTime(new Date()));

  return <ChatBubbleBot message={<p className="body-med-14">{answer}</p>} time={timeRef.current} />;
};

export default ChatAnswerBox;
