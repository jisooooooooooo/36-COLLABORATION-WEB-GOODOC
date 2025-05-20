import Ellipsis from '@shared/assets/svg/ellipsis.svg?react';

interface QnAListItemProps {
  title: string;
  summary: string;
  department: string;
  timeElapsed: string;
}

const QnAListItem = ({ title, summary, department, timeElapsed }: QnAListItemProps) => {
  return (
    <div className="flex flex-col w-[20.9375rem]">
      <div className="flex gap-[.5rem] items-center text-CGray-4">
        <span className="caption-semi-13">{department}</span>
        <Ellipsis />
        <span className="caption-reg-13">{timeElapsed}</span>
      </div>

      <span className="title-semi-18 mt-[1rem] line-clamp-2">{title}</span>
      <span className="body-reg-14 mt-[.5rem] text-CGray-4 line-clamp-2">{summary}</span>
    </div>
  );
};

export default QnAListItem;
