import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchQnAList, type QnAHomeResponse } from '@/shared/apis/qna/qnaHome';
import { usePagination } from '@/pages/main/hooks/UsePagination';
import { useNavigate } from 'react-router-dom';

export const useQnaHomeData = () => {
  const [selectedDept, setSelectedDept] = useState<string>('전체');

  const navigate = useNavigate();

  const {
    data: qnaList,
    isLoading,
    isError,
    error,
  } = useQuery<QnAHomeResponse>({
    queryKey: ['qnaList'],
    queryFn: fetchQnAList,
  });

  const { data, hasMore, loadMore } = usePagination(qnaList?.qnaPreviews ?? [], 3);

  const filteredData =
    selectedDept === '전체' ? data : data.filter(dept => dept.department === selectedDept);

  return {
    selectedDept,
    setSelectedDept,
    isLoading,
    isError,
    error,
    filteredData,
    hasMore,
    loadMore,
    navigate,
  };
};
