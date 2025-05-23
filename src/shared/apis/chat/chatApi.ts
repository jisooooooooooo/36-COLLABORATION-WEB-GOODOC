import { apiClient } from '@/shared/apis/apiClient';

export interface ChatRequest {
  files: File[];
  question: string;
  detail: string;
}

export interface ChatResponse {
  answer: string;
  summary: string;
  department: string;
}

export const postChat = async (data: ChatRequest): Promise<ChatResponse> => {
  const formData = new FormData();
  data.files.forEach(file => formData.append('files', file));
  formData.append('question', data.question);
  formData.append('detail', data.detail);

  const response = await apiClient.post('/qna', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data.data;
};
