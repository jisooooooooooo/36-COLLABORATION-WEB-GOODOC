import Button from './Button';

interface Props {
  onClick: () => void;
}

const NextQuestionButton = ({ onClick }: Props) => (
  <div className="flex justify-end mr-[1.25rem]">
    <Button label="다음 질문 받기" variant="secondary" onClick={onClick} />
  </div>
);

export default NextQuestionButton;
