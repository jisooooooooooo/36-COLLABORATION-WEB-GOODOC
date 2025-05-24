import { useEffect, useState } from 'react';
import { chatFadeUp, chatEnter, chatHidden } from '@/shared/styles/animation';

interface ChatBubbleBotProps {
  message: React.ReactNode;
  time: string;
}

const ChatUser: React.FC<ChatBubbleBotProps> = ({ message, time }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const animationClass = visible ? chatEnter : chatHidden;

  return (
    <div className={`${chatFadeUp} ${animationClass}  flex flex-col items-end mr-[1.25rem]`}>
      <div className="bg-CGray-1 text-White body-med-14 px-[.75rem] py-[.625rem] rounded-tl-[.75rem] rounded-br-[.75rem] rounded-bl-[.75rem] max-w-[247px] break-words">
        {message}
      </div>
      <span className="body-med-10 text-CGray-4 mt-[.5rem]">{time}</span>
    </div>
  );
};

export default ChatUser;
