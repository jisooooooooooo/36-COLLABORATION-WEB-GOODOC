import { useState } from 'react';
import Alert from '@shared/assets/svg/chatAlert.svg?react';
import ChatWelcomeBox from '@/pages/chat/components/chatBox/ChatWelcomeBox';
import ChatUser from './user/ChatUser';
import { formatTime } from '@/shared/utils/date';

const NOTICE_MESSAGE = '익명으로 공개하니 안심하세요';

const ChatBody: React.FC = () => {
  const [userStarted, setUserStarted] = useState(false);

  const handleStart = () => {
    setUserStarted(true);
  };

  return (
    <section className="bg-CGray-8 h-full flex flex-col pb-[5rem] gap-[1.5rem]">
      <div className="flex items-center py-[.94rem] pl-[1rem] gap-[.25rem]">
        <Alert className="w-[1rem] h-[1rem]" aria-hidden="true" />
        <p className="title-semi-14 text-Mainblue">{NOTICE_MESSAGE}</p>
      </div>

      <ChatWelcomeBox onStart={handleStart} />
      {userStarted && <ChatUser message="상담 시작하기" time={formatTime(new Date())} />}
    </section>
  );
};

export default ChatBody;
