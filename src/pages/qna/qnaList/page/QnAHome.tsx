import DeptFilter from '@pages/qna/qnaList/components/DeptFilter';
import QnAList from '@pages/qna/qnaList/components/QnAList';
import QnAButton from '@/shared/components/QnAButton';
import MyQuestion from '../components/MyQuestion';
import { usePagination } from '@/pages/main/hooks/UsePagination';

const dummyQnaData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  summary: `요약 ${i + 1}`,
  question: `질문 내용 ${i + 1}`,
  timeElapsed: `${i + 1}일 전`,
  department: `진료과 ${i + 1}`,
}));

const QnAHome = () => {
  const { data: qnaPreviews, hasMore, loadMore } = usePagination(dummyQnaData, 5);

  return (
    <div className="flex flex-col items-center mb-[2.25rem]">
      <DeptFilter />
      <MyQuestion />
      <QnAList qnaPreviews={qnaPreviews} />
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
      />
    </div>
  );
};

export default QnAHome;
