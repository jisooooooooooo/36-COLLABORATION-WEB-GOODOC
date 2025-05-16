import DeptFilter from '@pages/qna/qnaList/components/DeptFilter/DeptFilter';
import QnAList from '@pages/qna/qnaList/components/QnA/QnAList';

const QnAHome = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <DeptFilter />
      <QnAList />
    </div>
  );
};

export default QnAHome;
