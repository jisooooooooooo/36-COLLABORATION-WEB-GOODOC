import ForwardArrow from '@shared/assets/svg/IconForwardArrow.svg?react';
import { useNavigate } from 'react-router';

const MyQuestion = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/qna/my');
  };

  return (
    <button
      type="button"
      className="flex justify-between items-end w-[20.9375rem] mt-[1.25rem] mb-[2.5rem] py-[1.6875rem] px-[1.5rem] border border-[#ECEDF0] rounded-[.75rem]"
      onClick={handleClick}
    >
      <span className="items-center title-semi-18 text-CGray">내 질문</span>
      <div className="flex gap-[.25rem]">
        <span className="title-semi-18 text-CGray leading-[1.6rem]">0</span>
        <ForwardArrow className="w-[1.5rem] h-[1.5rem]" />
      </div>
    </button>
  );
};

export default MyQuestion;
