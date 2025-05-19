import { useNavigate, useParams } from 'react-router-dom';
import QnAHeader from '../components/QnAHeader';
import QnAAnswer from '../components/QnAAnswer';
import QnANotice from '../components/QnANotice';

const qnaData: Record<
  string,
  {
    id: number;
    title: string;
    question: string;
    answer: string;
    summary: string;
    department: string;
    timeElapsed: string;
  }
> = {
  '1': {
    id: 1,
    title: '두드러기의 원인은 무엇인가요?',
    question: '두드러기가 왜 생기는 걸까요?',
    answer:
      '두드러기는 피부에 발생하는 발진으로, 주로 가려움증과 함께 나타납니다. 보통 알레르기 반응이나 특별한 자극에 의해 발생할 수 있으며, 다음과 같은 원인들이 있습니다: 1. 알레르기 요인: 특정 음식(예: 견과류, 해산물), 약물, 꽃가루 또는 동물의 털 등. 2. 물리적 자극: 차가운 온도, 더운 물, 압력 등. 3. 감염: 바이러스나 세균 감염으로 인한 반응. 4. 스트레스: 심리적 스트레스가 면역 체계에 영향을 줄 수 있습니다. 증상은 보통 일시적이며, 치료는 항히스타민제를 통해 증상 완화를 시도합니다. 심하거나 지속되는 경우 전문가와 상담해야 합니다.',
    summary: '두드러기는 가려움증을 동반하고 대개 일시적이지만 지속 시 치료가 필요합니다.',
    department: '피부과',
    timeElapsed: '5일 전',
  },
};

const QnADetail = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  if (!id || !qnaData[id]) {
    return <div>존재하지 않는 문서입니다.</div>;
  }

  const qna = qnaData[id];

  const handleClick = () => {
    navigate('/qna');
  };

  return (
    <main className="flex flex-col items-center justify-center pt-[1.5rem]">
      {/* 상단 섹션 */}
      <QnAHeader
        department={qna.department}
        title={qna.title}
        keyword={qna.question}
        date={qna.timeElapsed}
      />
      {/* 하단 섹션 */}
      <QnAAnswer
        answer={qna.answer}
        summary={qna.summary}
        department={qna.department}
        timeElapsed={qna.timeElapsed}
      />
      <button
        type="button"
        onClick={handleClick}
        className="mb-[4rem] self-start rounded-[0.5rem] border border-[#ECEDF0] bg-White px-[1.25rem] py-[0.5625rem] ml-[1.25rem]"
        aria-label="QnA 목록으로 이동"
      >
        <span className="title-bold-14 text-WGray ">목록으로</span>
      </button>
      {/* 유의사항 */}
      <QnANotice />
    </main>
  );
};

export default QnADetail;
