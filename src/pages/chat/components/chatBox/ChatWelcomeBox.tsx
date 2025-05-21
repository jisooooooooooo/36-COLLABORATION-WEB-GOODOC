import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBubbleBot from '@/pages/chat/components/chatBox/ChatBubbleBot';
import Button from '@pages/chat/components/Button';
import { formatTime } from '@/shared/utils/date';
import { chatFadeUp, chatEnter, chatHidden } from '@/shared/styles/animation';

interface ChatWelcomeBoxProps {
  onStart: () => void;
}

const ChatWelcomeBox: React.FC<ChatWelcomeBoxProps> = ({ onStart }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const timeRef = useRef(formatTime(new Date()));

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const animationClass = visible ? chatEnter : chatHidden;

  return (
    <div className={`${chatFadeUp} ${animationClass}`}>
      <ChatBubbleBot
        message={
          <>
            <p className="body-med-14">
              안녕하세요, 저는 여러분의 건강 고민을 함께 나눌 굿봇이에요.
            </p>
            <p className="body-med-14 mb-[.875rem]">
              궁금한 증상이나 걱정되는 상황이 있다면 편하게 말씀해 주세요.
            </p>
            <p className="title-bold-14">먼저 원하시는 서비스를 선택해주세요.</p>

            <div className="flex gap-[.75rem] mt-[1rem] justify-center w-full">
              <Button label="Q&A 확인하기" onClick={() => navigate('/qna')} variant="primary" />
              <Button label="상담 시작하기" onClick={onStart} variant="secondary" />
            </div>
          </>
        }
        time={timeRef.current}
      />
    </div>
  );
};

export default ChatWelcomeBox;
