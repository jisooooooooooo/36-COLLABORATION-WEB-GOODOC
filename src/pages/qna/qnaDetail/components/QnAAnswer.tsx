import ChatProfile from '@shared/assets/svg/chatProfile.svg?react';
import { formatText } from '@/shared/utils/formatText';

interface QnAAnswerProps {
  answer: string;
  summary: string;
  department: string;
  timeElapsed: string;
}

const QnAAnswer = ({ answer, summary, department, timeElapsed }: QnAAnswerProps) => {
  const formattedContent = formatText(answer);
  const formattedSummary = formatText(`요약: ${summary}`);
  const formattedRecommend = formatText(`추천 진료과: ${department}`);

  return (
    <section className="mb-[3.13rem] bg-WGray-4 p-[1.25rem]">
      <div className="mb-[1rem] flex gap-[0.5rem]">
        <ChatProfile className="w-[3rem] h-[3rem]" />
        <div className="flex-col gap-[0.12rem]">
          <div className="body-bold-13 text-Mainblue">AI 건강 매니저</div>
          <div className="title-bold-18 text-CGray">굿봇의 답변</div>
        </div>
      </div>
      <div className="body-med-16 text-CGray-2">{formattedContent}</div>
      <div className="body-med-16 text-CGray-2">{formattedSummary}</div>
      <div className="body-med-16 text-CGray-2">{formattedRecommend}</div>
      <div className="flex justify-between mt-[0.13rem]">
        <span className="caption-semi-13 text-CGray-4">{timeElapsed}</span>
        <button type="button" aria-label="신고하기">
          <div className="caption-semi-13 text-CGray-5">신고</div>
        </button>
      </div>
    </section>
  );
};

export default QnAAnswer;
