import Ellipsis from '@shared/assets/svg/ellipsis.svg?react';

interface QnAHeaderProps {
  department: string;
  title: string;
  keyword: string;
  date: string;
}

const QnAHeader = ({ department, title, keyword, date }: QnAHeaderProps) => {
  return (
    <article className="my-[2.25rem] w-full px-[1.25rem]">
      <header className="mb-[1rem] flex items-center gap-[0.5rem]">
        <span className="caption-extraB-13 text-CGray-4">{department}</span>
        <Ellipsis className="h-[0.125rem] w-[0.125rem]" />
        <span className="caption-semi-13 text-CGray-4">{date}</span>
      </header>
      <div className="mb-[1.25rem] title-bold-20 text-CGray">{title}</div>
      <div className="title-semi-16 text-CGray-1">{keyword}</div>
    </article>
  );
};

export default QnAHeader;
