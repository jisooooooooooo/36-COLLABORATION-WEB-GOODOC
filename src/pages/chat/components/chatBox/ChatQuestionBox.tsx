import { useEffect, useRef, useState } from 'react';
import ChatBubbleBot from './ChatBubbleBot';
import { formatTime } from '@/shared/utils/date';
import { chatFadeUp, chatEnter, chatHidden } from '@/shared/styles/animation';

const ChatQuestionBox = () => {
  const timeRef = useRef(formatTime(new Date()));
  const [visible, setVisible] = useState(false);

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
          <div>
            <p className="body-med-14 text-CGray-2">
              상담이 필요한 내용을 알려주세요. <span className="text-CGray-4">(1/3)</span>
            </p>
            <p className="body-med-14 text-CGray-4">예)</p>
            <ul className="body-med-14 text-CGray-4 list-disc pl-[1rem] space-y-[0.25rem]">
              <li>혈압약을 먹고 운동해도 될까요?</li>
              <li>손발이 자주 저리는데 이유가 뭘까요?</li>
              <li>피부 두드러기가 났어요 어떻게 해야하죠?</li>
            </ul>
          </div>
        }
        time={timeRef.current}
      />
    </div>
  );
};

export default ChatQuestionBox;
