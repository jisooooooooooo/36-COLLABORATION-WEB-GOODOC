import DeptFilter from '@pages/qna/qnaList/components/DeptFilter/DeptFilter';
import QnAList from '@pages/qna/qnaList/components/QnA/QnAList';
import QnAButton from '@/shared/components/QnAButton';

const QnAHome = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-[6.25rem]">
      <DeptFilter />
      <QnAList />
      <QnAButton
        text="질문 더보기"
        font="title-semi-16"
        textColor="text-CGray-3"
        backgroundColor="bg-CGray-8"
        width="w-[20.9375rem]"
        px="px-[7.5rem]"
        py="py-[1rem]"
      />
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
