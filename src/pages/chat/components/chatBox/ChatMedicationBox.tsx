import { useRef } from 'react';
import ChatBubbleBot from '@pages/chat/components/chatBox/ChatBubbleBot';
import { formatTime } from '@/shared/utils/date';

const ChatMedicationBox = () => {
  const timeRef = useRef(formatTime(new Date()));
  return (
    <ChatBubbleBot
      message={
        <div>
          <p className="body-med-14 text-CGray-2">
            복약중인 약에 대한 정보를 상세히 알려주세요. <span className="text-CGray-4">(2/3)</span>
          </p>
          <p className="body-med-14 text-CGray-4">예)</p>
          <ul className="body-med-14 text-CGray-4 list-disc pl-[1.1875rem] space-y-[0.25rem]">
            <li>빈혈약 주 1회 복용중</li>
            <li>아스피린을 복용하면 배가 아파요</li>
            <li>만성 두통</li>
          </ul>
        </div>
      }
      time={timeRef.current}
    />
  );
};

export default ChatMedicationBox;
