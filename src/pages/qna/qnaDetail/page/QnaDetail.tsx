import { useNavigate } from 'react-router-dom';
import QnASearch from '../../qnaList/components/QnASearch';
import Ellipsis from '@shared/assets/svg/ellipsis.svg?react';
import ChatProfile from '@shared/assets/svg/chatProfile.svg?react';
import Footer from '@/shared/components/Footer';
import { noticeList } from '@/shared/constants/notice';

const content =
  '두드러기는 피부에 발생하는 발진으로, 주로 가려움증과 함께 나타납니다. 보통 알레르기 반응이나 특별한 자극에 의해 발생할 수 있으며, 다음과 같은 원인들이 있습니다. 1. 알레르기 요인: 특정 음식(예: 견과류, 해산물), 약물, 꽃가루 또는 동물의 털 등. 2. 물리적 자극: 차가운 온도, 더운 물, 압력 등. 3. 감염: 바이러스나 세균 감염으로 인한 반응. 4. 스트레스: 심리적 스트레스가 면역 체계에 영향을 줄 수 있습니다. 두드러기의 증상은 보통 일시적이며, 몇 시간에서 며칠 내에 자연스럽게 사라지는 경우가 많습니다. 치료는 주로 증상 완화에 중점을 두며, 항히스타민제가 많이 사용됩니다. 그러나 만약 두드러기가 지속되거나 심한 경우, 반드시 의료 전문가와 상담해야 합니다. 소아의 경우 특히 주의가 필요하며, 진단 및 치료에 있어 전문적인 도움을 받는 것이 중요합니다.';

const QnADetail = () => {
  const navigate = useNavigate();
  const formattedContent = content
    .split(/(?<=[.?!])\s+/)
    .reduce<string[]>((acc, sentence) => {
      const last = acc[acc.length - 1];
      if (/^\d+\./.test(sentence.trim())) {
        acc.push(sentence.trim());
      } else if (last && /^\d+\./.test(last)) {
        // 숫자 목록이면 연결
        acc[acc.length - 1] = last + ' ' + sentence.trim();
      } else {
        acc.push(sentence.trim());
      }
      return acc;
    }, [])
    .map((sentence, index) => (
      <p key={index} className="mb-[1rem]">
        {sentence}
      </p>
    ));

  const handleClick = () => {
    navigate('/qna');
  };

  return (
    <main className="flex flex-col justify-center items-center pt-[1.5rem]">
      <QnASearch />
      {/* 상단 섹션 */}
      <article className="w-full px-[1.25rem] my-[2.25rem]">
        <header className="flex items-center mb-[1rem] gap-[0.5rem]">
          <span className="caption-extraB-13 text-CGray-4">피부과</span>
          <Ellipsis className="w-[0.125rem] h-[0.125rem]" />
          <span className="caption-semi-13 text-CGray-4">5일 전</span>
        </header>
        <div className="title-bold-20 text-CGray mb-[1.25rem]">두드러기의 원인은 무엇인가요?</div>
        <div className="title-semi-16 text-CGray-1">두드러기</div>
      </article>
      {/* 하단 섹션 */}
      <section className="p-[1.25rem] bg-WGray-4 mb-[3.13rem]">
        <div className="flex gap-[0.5rem] mb-[1rem]">
          <ChatProfile className="w-[3rem] h-[3rem]" />
          <div className="flex-col gap-[0.12rem]">
            <div className="body-bold-13 text-Mainblue">AI 건강 매니저</div>
            <div className="title-bold-18 text-CGray">굿봇의 답변</div>
          </div>
        </div>
        <div className="mb-[0.13rem] body-med-16 text-CGray-2">{formattedContent}</div>
        <div className="flex justify-between">
          <span className="caption-semi-13 text-CGray-4">5일 전</span>
          <button type="button" aria-label="신고하기">
            <div className="caption-semi-13 text-CGray-5">신고</div>
          </button>
        </div>
      </section>
      <button
        type="button"
        className="border-[1px] self-start rounded-[0.5rem] mb-[4rem] bg-White py-[1rem] px-[1.25rem] border-[#ECEDF0]"
        onClick={handleClick}
        aria-label="QnA 목록으로 이동"
      >
        <span className="title-bold-14 text-WGray">목록으로</span>
      </button>

      {/* 유의사항 */}
      <section className="w-full px-[1.25rem] mb-[3rem]" aria-label="유의사항 안내">
        <h2 className="title-bold-14 text-CGray-2 mb-[0.5rem]">유의해주세요</h2>
        <div>
          {noticeList.map((notice, index) => (
            <div key={index} className="flex items-start body-bold-13 text-CGray-4">
              <span className="mx-[0.2rem] leading-[1.375rem]">ㆍ</span>
              <span>{notice}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default QnADetail;
