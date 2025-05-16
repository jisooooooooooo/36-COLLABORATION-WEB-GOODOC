import ForwardArrow from '@shared/assets/svg/IconForwardArrow.svg?react';

const MyQuestion = () => {
  return (
    <button
      type="button"
      className="flex justify-between items-end w-[335px] py-[27px] px-[24px] border border-[#ECEDF0] rounded-[12px]"
    >
      <span className="title-semi-18 text-CGray">내 질문</span>
      <div className="flex  gap-[4px] items-end">
        <span className="title-semi-18 text-CGray text-center">0</span>
        <ForwardArrow className="w-[24px] h-[24px] " />
      </div>
    </button>
  );
};

export default MyQuestion;
