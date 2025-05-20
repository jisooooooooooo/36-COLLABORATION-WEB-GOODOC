import { useEffect, useRef, useState } from 'react';
import Alert from '@shared/assets/svg/chatAlert.svg?react';
import { formatTime } from '@/shared/utils/date';
import ChatWelcomeBox from '@/pages/chat/components/chatBox/ChatWelcomeBox';
import ChatQuestionBox from './chatBox/ChatQuestionBox';
import ChatUser from './user/ChatUser';

const NOTICE_MESSAGE = '익명으로 공개하니 안심하세요';

//확인용
interface ChatBodyProps {
  onOpenModal: () => void;
}

const ChatBody: React.FC<ChatBodyProps> = ({ onOpenModal }) => {
  // const ChatBody: React.FC = () => {
  const [chatStep, setChatStep] = useState<'initial' | 'started'>('initial');

  const userStartTimeRef = useRef<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleStart = () => {
    userStartTimeRef.current = formatTime(new Date());
    setChatStep('started');
  };

  const getUserStartTime = () => userStartTimeRef.current ?? formatTime(new Date());

  useEffect(() => {
    if (chatStep === 'started' && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatStep]);

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
          <div ref={scrollRef} />
        </>
      )}

      {/* ui 확인용 임시 버튼 */}
      <button onClick={onOpenModal} className="mt-4 self-center text-sm text-blue-600 underline">
        모달 열기
      </button>
    </section>
  );
};

export default ChatBody;
