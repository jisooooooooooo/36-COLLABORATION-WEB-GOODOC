import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import QnAHeader from '../components/QnAHeader';
import QnAAnswer from '../components/QnAAnswer';
import QnANotice from '../components/QnANotice';
import { fetchQnaDetail } from '@/shared/apis/qna/qnaDetail';
import { getQnaErrorMessage } from '@/shared/apis/qna/error';

const QnADetail = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const {
    data: qna,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['qna', id],
    queryFn: () => fetchQnaDetail(id!),
    enabled: !!id,
  });

  const handleClick = () => {
    navigate('/qna');
  };

  // 여기 나중에 바꿀 예정
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>{getQnaErrorMessage(error)}</div>;
  if (!qna) return <div>존재하지 않는 질문입니다.</div>;

  return (
    <main className="flex flex-col items-center justify-center pt-[1.5rem]">
      {/* 상단 섹션 */}
      <QnAHeader
        department={qna.department}
        title={qna.title}
        keyword={qna.question}
        date={qna.timeElapsed}
      />
      {/* 하단 섹션 */}
      <QnAAnswer
        answer={qna.answer}
        summary={qna.summary}
        department={qna.department}
        timeElapsed={qna.timeElapsed}
      />
      <button
        type="button"
        onClick={handleClick}
        className="mb-[4rem] self-start rounded-[0.5rem] border border-[#ECEDF0] bg-White px-[1.25rem] py-[0.5625rem] ml-[1.25rem]"
        aria-label="QnA 목록으로 이동"
      >
        <span className="title-bold-14 text-WGray ">목록으로</span>
      </button>
      {/* 유의사항 */}
      <QnANotice />
    </main>
  );
};

export default QnADetail;
