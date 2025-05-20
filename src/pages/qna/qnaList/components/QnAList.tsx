import QnAListItem from './QnAListItem';

interface QnAListItemProps {
  id: number;
  title: string;
  summary: string;
  department: string;
  timeElapsed: string;
}
interface QnAListProps {
  qnaPreviews: QnAListItemProps[];
}

const QnAList = ({ qnaPreviews }: QnAListProps) => {
  return (
    <div className="flex flex-col gap-[3rem] mb-[5rem]">
      {qnaPreviews.map(qna => (
        <QnAListItem
          key={qna.id}
          department={qna.department}
          title={qna.title}
          timeElapsed={qna.timeElapsed}
          summary={qna.summary}
        />
      ))}
    </div>
  );
};

export default QnAList;
