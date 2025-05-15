import DeptFilter from '../components/DeptFilter/DeptFilter';
import QnAList from '../components/QnA/QnAList';

const QnAHome = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <DeptFilter />
      <QnAList />
    </div>
  );
};

export default QnAHome;
