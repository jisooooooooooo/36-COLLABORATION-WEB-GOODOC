import QnAListItem from './QnAListItem';
import type { QnAPreview } from '@/shared/apis/qna/qnaHome';
// 컴파일할 때만 사용되고, 실제 실행되는 JS 코드에서는 존재하지 않는 타입 정보 ->
// import할 때 import type 이렇게 명시해야 트리쉐이킹과 모듈 번들링 최적화가 잘 이루어짐
interface QnAListProps {
  qnaPreviews: QnAPreview[];
}

const QnAList = ({ qnaPreviews }: QnAListProps) => {
  if (qnaPreviews.length === 0)
    return (
      <div className="w-[20.9375rem] justify-center title-semi-18 mb-[2.5rem]">
        결과를 찾을 수 없습니다
      </div>
    );
  return (
    <div className="flex flex-col gap-[3rem] mb-[5rem]">
      {qnaPreviews.map(qna => (
        <QnAListItem
          key={qna.id}
          id={qna.id}
          department={qna.department}
          title={qna.title}
          timeElapsed={qna.timeElapsed}
          summary={qna.summary}
        />
      ))}
    </div>
  );
};

export default QnAList;
