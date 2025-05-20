import { useEffect, useRef, useState } from 'react';
import Alert from '@shared/assets/svg/chatAlert.svg?react';
import { formatTime } from '@/shared/utils/date';
import ChatWelcomeBox from '@/pages/chat/components/chatBox/ChatWelcomeBox';
import ChatQuestionBox from './chatBox/ChatQuestionBox';
import ChatUser from './user/ChatUser';
import Button from './Button';
import ChatConsiderationBox from './chatBox/ChatConsiderationBox';

interface ChatBodyProps {
  messages: string[];
}

const NOTICE_MESSAGE = '익명으로 공개하니 안심하세요';

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  const [chatStep, setChatStep] = useState<'initial' | 'started'>('initial');
  const [showNextQuestion, setShowNextQuestion] = useState(false);

  const userStartTimeRef = useRef<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleStart = () => {
    userStartTimeRef.current = formatTime(new Date());
    setChatStep('started');
  };

  const getUserStartTime = () => userStartTimeRef.current ?? formatTime(new Date());

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <section className="bg-CGray-8 min-h-full flex flex-col pt-[3.25rem] pb-[5rem] gap-[1.5rem]">
      <div className="flex items-center py-[.94rem] pl-[1rem] gap-[.25rem]">
        <Alert className="w-[1rem] h-[1rem]" aria-hidden="true" />
        <p className="title-semi-14 text-Mainblue">{NOTICE_MESSAGE}</p>
      </div>

      <ChatWelcomeBox onStart={handleStart} />

      {chatStep === 'started' && (
        <>
          <ChatUser message="상담 시작하기" time={getUserStartTime()} />
          <ChatQuestionBox />

          {[...messages].reverse().map((msg, idx) => (
            <ChatUser key={idx} message={msg} time={formatTime(new Date())} />
          ))}

          {messages.length > 0 && (
            <div className="flex justify-end mr-[1.25rem]">
              <Button
                label="다음 질문 받기"
                variant="secondary"
                onClick={() => setShowNextQuestion(true)}
              />
            </div>
          )}
          {showNextQuestion && <ChatConsiderationBox />}

          <div ref={scrollRef} />
        </>
      )}
    </section>
  );
};

export default ChatBody;
