import Ellipsis from '@shared/assets/svg/ellipsis.svg?react';

const QnAHeader = () => {
  return (
    <article className="my-[2.25rem] w-full px-[1.25rem]">
      <header className="mb-[1rem] flex items-center gap-[0.5rem]">
        <span className="caption-extraB-13 text-CGray-4">피부과</span>
        <Ellipsis className="h-[0.125rem] w-[0.125rem]" />
        <span className="caption-semi-13 text-CGray-4">5일 전</span>
      </header>
      <div className="mb-[1.25rem] title-bold-20 text-CGray">두드러기의 원인은 무엇인가요?</div>
      <div className="title-semi-16 text-CGray-1">두드러기</div>
    </article>
  );
};

export default QnAHeader;
