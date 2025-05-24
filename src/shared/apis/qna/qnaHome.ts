import apiClient from '../apiClient';

export interface QnAPreview {
  id: number;
  title: string;
  summary: string;
  department: string;
  timeElapsed: string;
}

export interface QnAHomeResponse {
  qnaPreviews: QnAPreview[];
}

export const fetchQnAList = async (): Promise<QnAHomeResponse> => {
  const response = await apiClient.get('/qna/all');
  console.log(response.data.data);
  const { qnAPreviews } = response.data.data;
  return {
    qnaPreviews: qnAPreviews,
  };
};
