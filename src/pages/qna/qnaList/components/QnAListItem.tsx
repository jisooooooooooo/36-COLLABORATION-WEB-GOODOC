import Ellipsis from '@shared/assets/svg/ellipsis.svg?react';

interface QnAListItemProps {
  question: string;
  summary: string;
  department: string;
  timeElapsed: string;
}

const QnAListItem = ({ question, summary, department, timeElapsed }: QnAListItemProps) => {
  return (
    <div className="flex flex-col w-[20.9375rem]">
      <div className="flex gap-[.625rem] items-center">
        <span className="caption-semi-13">내과</span>
        <Ellipsis />
        <span className="caption-reg-13">22시간 전</span>
      </div>

      <span className="title-semi-18 mt-[.625rem] line-clamp-2">위고비를 맞아도 되나요?</span>
      <span className="body-reg-14 mt-[.5rem] line-clamp-2">
        당뇨약을 약하게 먹고 있는데 위고비를 맞아도 될까요?
      </span>
    </div>
  );
};

export default QnAListItem;
