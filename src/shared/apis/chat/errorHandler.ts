export const handleApiError = (error: unknown) => {
  if (error instanceof Error) {
    console.error('❌ API Error:', error.message);
    alert(`문제가 발생했어요: ${error.message}`);
  } else {
    console.error('❌ Unknown error:', error);
    alert('알 수 없는 오류가 발생했어요.');
  }
};
