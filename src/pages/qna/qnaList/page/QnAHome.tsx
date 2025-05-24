import DeptFilter from '@pages/qna/qnaList/components/DeptFilter';
import QnAList from '@pages/qna/qnaList/components/QnAList';
import QnAButton from '@/shared/components/QnAButton';
import MyQuestion from '../components/MyQuestion';
import { getQnaErrorMessage } from '@/shared/apis/qna/error';
import { useQnaHomeData } from '../hook/useQnAHomeData';

const QnAHome = () => {
  const {
    selectedDept,
    setSelectedDept,
    isLoading,
    isError,
    error,
    filteredData,
    hasMore,
    loadMore,
    navigate,
  } = useQnaHomeData();

  if (isLoading) return <span>로딩 중...</span>;
  if (isError) return <div>{getQnaErrorMessage(error)}</div>;

  return (
    <div className="flex flex-col mb-[2.25rem]">
      <DeptFilter selectedDept={selectedDept} onSelectDept={setSelectedDept} />
      <MyQuestion />
      <QnAList qnaPreviews={filteredData} />
      {hasMore && (
        <QnAButton
          text="질문 더보기"
          font="title-semi-16"
          textColor="text-CGray-3"
          backgroundColor="bg-CGray-8"
          width="w-[20.9375rem]"
          px="px-[7.5rem]"
          py="py-[1rem]"
          onClick={loadMore}
        />
      )}
      <QnAButton
        text="질문하기"
        font="title-semi-16"
        textColor="text-White"
        backgroundColor="bg-Mainblue"
        width="w-[20.9375rem]"
        px="px-[7.5rem]"
        py="py-[1rem]"
        position="fixed"
        bottom="bottom-[2rem]"
        onClick={() => navigate('/chat')}
      />
    </div>
  );
};

export default QnAHome;
