import { apiClient } from '@/shared/apis/apiClient';

export interface QnaDetail {
  title: string;
  question: string;
  answer: string;
  summary: string;
  department: string;
  timeElapsed: string;
}

export const fetchQnaDetail = async (id: string): Promise<QnaDetail> => {
  const response = await apiClient.get(`/qna/${id}`);
  return response.data.data;
};
