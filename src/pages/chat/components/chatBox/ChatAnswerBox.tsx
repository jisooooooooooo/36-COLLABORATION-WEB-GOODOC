// import { useRef, useState } from 'react';
import { useRef } from 'react';
import ChatBubbleBot from '@/pages/chat/components/chatBox/ChatBubbleBot';
import { formatTime } from '@/shared/utils/date';

// 디자인 더미 값(테스트용)
const answer = [
  '두드러기는 피부에 발생하는 발진으로, 주로 가려움증과 함께 나타납니다. 보통 알레르기 반응이나 특별한 자극에 의해 발생할 수 있으며, 다음과 같은 원인들이 있습니다. 1. 알레르기 요인: 특정 음식(예: 견과류, 해산물), 약물, 꽃가루 또는 동물의 털 등. 2. 물리적 자극: 차가운 온도, 더운 물, 압력 등. 3. 감염: 바이러스나 세균 감염으로 인한 반응. 4. 스트레스: 심리적 스트레스가 면역 체계에 영향을 줄 수 있습니다. 두드러기의 증상은 보통 일시적이며, 몇 시간에서 며칠 내에 자연스럽게 사라지는 경우가 많습니다. 치료는 주로 증상 완화에 중점을 두며, 항히스타민제가 많이 사용됩니다. 그러나 만약 두드러기가 지속되거나 심한 경우, 반드시 의료 전문가와 상담해야 합니다. 소아의 경우 특히 주의가 필요하며, 진단 및 치료에 있어 전문적인 도움을 받는 것이 중요합니다.',
];

const ChatAnswerBox = () => {
  const timeRef = useRef(formatTime(new Date()));
  // const [answer, setAnswer] = useState<string>('');

  return <ChatBubbleBot message={<p className="body-med-14">{answer}</p>} time={timeRef.current} />;
};

export default ChatAnswerBox;
