import DeptFilter from '@pages/qna/qnaList/components/DeptFilter';
import QnAList from '@pages/qna/qnaList/components/QnAList';
import QnAButton from '@/shared/components/QnAButton';
import MyQuestion from '../components/MyQuestion';
import { usePagination } from '@/pages/main/hooks/UsePagination';
import { useQuery } from '@tanstack/react-query';
import { fetchQnAList, type QnAHomeResponse } from '@/shared/apis/qna/qnaHome';
import { getQnaErrorMessage } from '@/shared/apis/qna/error';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const dummyQnaData = Array.from({ length: 20 }, (_, i) => ({
//   id: i + 1,
//   summary: `요약 ${i + 1}`,
//   question: `질문 내용 ${i + 1}`,
//   timeElapsed: `${i + 1}일 전`,
//   department: `진료과 ${i + 1}`,
// }));

const QnAHome = () => {
  const [selectedDept, setSelectedDept] = useState<string>('전체');

  const {
    data: qnaList,
    isLoading,
    isError,
    error,
  } = useQuery<QnAHomeResponse>({
    queryKey: ['qnaList'],
    queryFn: fetchQnAList,
  });

  const navigate = useNavigate();

  const { data, hasMore, loadMore } = usePagination(qnaList?.qnaPreviews ?? [], 3);
  const filteredData =
    selectedDept === '전체' ? data : data.filter(dept => dept.department === selectedDept);

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
