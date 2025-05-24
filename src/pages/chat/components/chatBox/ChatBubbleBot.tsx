import { useEffect, useState } from 'react';
import ChatProfileIcon from '@shared/assets/svg/chatProfile.svg?react';
import { chatFadeUp, chatEnter, chatHidden } from '@/shared/styles/animation';

interface ChatBubbleBotProps {
  message: React.ReactNode;
  time: string;
}

const ChatBubbleBot: React.FC<ChatBubbleBotProps> = ({ message, time }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const animationClass = visible ? chatEnter : chatHidden;

  return (
    <div className={`flex justify-center w-full ${chatFadeUp} ${animationClass}`}>
      <div className="w-[20.9375rem] h-auto flex items-start gap-[.75rem]">
        <ChatProfileIcon className="w-[2.25rem] h-[2.25rem] min-w-[2.25rem] min-h-[2.25rem] block" />
        <div className="flex flex-col">
          <div className="bg-White w-[16.875rem] text-CGray-2 p-[.75rem] rounded-tr-[.75rem] rounded-br-[.75rem] rounded-bl-[.75rem]">
            {message}
          </div>
          <span className="body-med-10 text-CGray-4 mt-[.5rem]">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubbleBot;
