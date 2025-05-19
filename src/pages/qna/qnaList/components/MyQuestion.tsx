import ForwardArrow from '@shared/assets/svg/IconForwardArrow.svg?react';

const MyQuestion = () => {
  return (
    <button
      type="button"
      className="flex justify-between items-end w-[20.9375rem] mt-[1.25rem] mb-[2.5rem] py-[1.6875rem] px-[1.5rem] border border-[#ECEDF0] rounded-[.75rem]"
    >
      <span className="title-semi-18 text-CGray">내 질문</span>
      <div className="flex  gap-[.25rem] items-end">
        <span className="title-semi-18 text-CGray text-center">0</span>
        <ForwardArrow className="w-[1.5rem] h-[1.5rem] " />
      </div>
    </button>
  );
};

export default MyQuestion;
