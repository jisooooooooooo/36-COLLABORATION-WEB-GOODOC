import { useNavigate } from 'react-router-dom';
import QnAHeader from '../components/QnADetailHeader';
import QnAAnswer from '../components/QnAAnswer';
import QnANotice from '../components/QnANotice';

const content =
  '두드러기는 피부에 발생하는 발진으로, 주로 가려움증과 함께 나타납니다. 보통 알레르기 반응이나 특별한 자극에 의해 발생할 수 있으며, 다음과 같은 원인들이 있습니다. 1. 알레르기 요인: 특정 음식(예: 견과류, 해산물), 약물, 꽃가루 또는 동물의 털 등. 2. 물리적 자극: 차가운 온도, 더운 물, 압력 등. 3. 감염: 바이러스나 세균 감염으로 인한 반응. 4. 스트레스: 심리적 스트레스가 면역 체계에 영향을 줄 수 있습니다.  두드러기의 증상은 보통 일시적이며, 몇 시간에서 며칠 내에 자연스럽게 사라지는 경우가 많습니다. 치료는 주로 증상 완화에 중점을 두며, 항히스타민제가 많이 사용됩니다. 그러나 만약 두드러기가 지속되거나 심한 경우, 반드시 의료 전문가와 상담해야 합니다. 소아의 경우 특히 주의가 필요하며, 진단 및 치료에 있어 전문적인 도움을 받는 것이 중요합니다.';

const summary = '두드러기는 가려움증을 동반하고 대개 일시적이지만 지속 시 치료가 필요합니다.';
const recommend = '피부과 또는 내과';

const QnADetail = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/qna');
  };

  return (
    <main className="flex flex-col items-center justify-center pt-[1.5rem]">
      {/* 상단 섹션 */}
      <QnAHeader />
      {/* 하단 섹션 */}
      <QnAAnswer content={content} summary={summary} recommend={recommend} />

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
