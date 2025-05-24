import Ellipsis from '@shared/assets/svg/ellipsis.svg?react';
import type { QnAPreview } from '@/shared/apis/qna/qnaHome';
import { useNavigate } from 'react-router-dom';

const QnAListItem = ({ id, title, summary, department, timeElapsed }: QnAPreview) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/qna/${id}`);
  };

  return (
    <button
      type="button"
      className="flex flex-col w-[20.9375rem] items-start"
      onClick={handleOnClick}
    >
      <div className="flex gap-[.5rem] text-CGray-4">
        <span className="caption-semi-13">{department}</span>
        <Ellipsis className="self-center" />
        <span className="caption-reg-13">{timeElapsed}</span>
      </div>

      <span className="title-semi-18 mt-[1rem] line-clamp-2 text-start">{title}</span>
      <span className="body-reg-14 mt-[.5rem] text-CGray-4 line-clamp-2 text-start">{summary}</span>
    </button>
  );
};

export default QnAListItem;
