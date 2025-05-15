import QnAListItem from './QnAListItem';

const QnAList = () => {
  return (
    <div className="flex flex-col gap-[3rem] mt-[1.875rem]">
      {Array.from({ length: 8 }).map((_, idx) => (
        <QnAListItem
          key={idx}
          department="내과"
          question="위고비를 맞아도 되나요?"
          timeElapsed="22시간 전"
          summary="당뇨약을 약하게 먹고 있는데 위고비를 맞아도 될까요?"
        />
      ))}
    </div>
  );
};

export default QnAList;
