import { qnaMy } from '@/shared/constants/qnaMy';
import QnAMyListItem from '../components/QnAMyListItem';

const QnAMy = () => {
  return (
    <div className="flex flex-col mt-[2.25rem] w-[20.9375rem]">
      <span className="title-bold-20 mb-[36px]">내 질문</span>

      {qnaMy.map(qna => (
        <QnAMyListItem
          key={qna.title}
          department={qna.department}
          title={qna.title}
          keyword={qna.keyword}
          date={qna.date}
        />
      ))}
    </div>
  );
};

export default QnAMy;
