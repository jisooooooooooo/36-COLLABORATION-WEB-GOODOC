import axios from 'axios';

export const getQnaErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const errorCode = error.response?.data?.errorCode;

    switch (errorCode) {
      case 'QNA_400':
        return '존재하지 않는 QnA 게시글입니다.';
      default:
        return 'QnA 요청 중 알 수 없는 오류가 발생했습니다.';
    }
  }
  return 'QnA 요청 처리 중 예기치 못한 오류가 발생했습니다.';
};
