import { useRef, useState, useEffect } from 'react';
import ChatBubbleBot from '@/pages/chat/components/chatBox/ChatBubbleBot';
import Button from '@pages/chat/components/Button';
import { formatTime } from '@/shared/utils/date';

const ChatSummaryBox = () => {
  const timeRef = useRef(formatTime(new Date()));
  const [summary, setSummary] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    const mock = {
      data: {
        summary: '두드러기는 가려움증을 동반하고 대개 일시적이지만 지속 시 치료가 필요합니다.',
        department: '피부과 또는 내과 (소아의 경우 소아청소년과)',
      },
    };
    setSummary(mock.data.summary);
    setDepartment(mock.data.department);
  }, []);

  return (
    <div>
      <ChatBubbleBot
        message={
          <>
            <p className="title-semi-16 text-Mainblue mb-[0.5rem]">요약 & 진료과 추천</p>
            <p className="body-med-14 mb-[1rem]">{summary}</p>
            <p className="body-med-14">{department}를 방문해보세요.</p>
            <div className="flex gap-[.75rem] mt-[1rem] justify-center w-full">
              <Button label="다시 상담하기" onClick={() => {}} variant="primary" />
              <Button label="상담 나가기" onClick={() => {}} variant="secondary" />
            </div>
          </>
        }
        time={timeRef.current}
      />
    </div>
  );
};

export default ChatSummaryBox;
