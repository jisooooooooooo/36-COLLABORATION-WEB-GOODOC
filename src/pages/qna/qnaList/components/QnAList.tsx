import QnAListItem from './QnAListItem';

interface QnAListItemProps {
  id: number;
  question: string;
  summary: string;
  department: string;
  timeElapsed: string;
}
interface QnAListProps {
  qnaPreviews: [QnAListItemProps];
}

const QnAList = ({ qnaPreviews }: QnAListProps) => {
  return (
    <div className="flex flex-col gap-[3rem] mb-[5rem]">
      {/* {Array.from({ length: 8 }).map((_, idx) => ( */}
      {qnaPreviews.map(qna => (
        <QnAListItem
          key={qna.id}
          department={qna.department}
          question={qna.question}
          timeElapsed={qna.timeElapsed}
          summary={qna.summary}
        />
      ))}
    </div>
  );
};

export default QnAList;
