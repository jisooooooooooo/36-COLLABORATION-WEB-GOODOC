import Ellipsis from '@shared/assets/svg/ellipsis.svg?react';

interface QnAHeaderProps {
  department: string;
  title: string;
  keyword: string;
  date: string;
}

const QnAMyListItem = ({ department, title, keyword, date }: QnAHeaderProps) => {
  const handleOnClick = () => {
    console.log('Clicked2');
  };

  return (
    <button type="button" onClick={handleOnClick}>
      <article className="w-[20.9375rem] mb-[3rem]">
        <header className="mb-[1rem] flex items-center gap-[0.5rem]">
          <span className="caption-semi-13 text-CGray-4">{department}</span>
          <Ellipsis className="h-[0.125rem] w-[0.125rem]" />
          <span className="caption-reg-13 text-CGray-4">{date}</span>
        </header>
        <div className="mb-[.5rem] title-semi-18 text-CGray-1 text-start">{title}</div>
        <div className="body-reg-14 text-CGray-4 text-start">{keyword}</div>
      </article>
    </button>
  );
};

export default QnAMyListItem;
