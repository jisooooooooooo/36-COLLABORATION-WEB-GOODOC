import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBubbleBot from '@/pages/chat/components/chatBox/ChatBubbleBot';
import Button from '@pages/chat/components/Button';
import { formatTime } from '@/shared/utils/date';

interface ChatSummaryBoxProps {
  summary: string;
  department: string;
}

const ChatSummaryBox: React.FC<ChatSummaryBoxProps> = ({ summary, department }) => {
  const timeRef = useRef(formatTime(new Date()));
  const navigate = useNavigate();

  const handleRestart = () => {
    window.location.reload();
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div>
      <ChatBubbleBot
        message={
          <>
            <p className="title-semi-16 text-Mainblue mb-[0.5rem]">요약 & 진료과 추천</p>
            <p className="body-med-14 mb-[1rem]">{summary}</p>
            <p className="body-med-14">{department}를 방문해보세요.</p>
            <div className="flex gap-[.75rem] mt-[1rem] justify-center w-full">
              <Button label="다시 상담하기" onClick={handleRestart} variant="primary" />
              <Button label="상담 나가기" onClick={handleExit} variant="secondary" />
            </div>
          </>
        }
        time={timeRef.current}
      />
    </div>
  );
};

export default ChatSummaryBox;
