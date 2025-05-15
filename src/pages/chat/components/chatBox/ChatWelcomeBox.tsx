import ChatBubbleBot from '@pages/chat/components/chatBot/ChatBubbleBot';
import Button from '@pages/chat/components/Button';

const ChatWelcomeBox = () => {
  return (
    <ChatBubbleBot
      message={
        <>
          <p className="body-med-14">안녕하세요, 저는 여러분의 건강 고민을 함께 나눌 굿봇이에요.</p>
          <p className="body-med-14 mb-[.875rem]">
            궁금한 증상이나 걱정되는 상황이 있다면 편하게 말씀해 주세요.
          </p>
          <p className="title-bold-14">먼저 원하시는 서비스를 선택해주세요.</p>

          <div className="flex gap-[.75rem] mt-[1rem] justify-center w-full">
            <Button label="Q&A 확인하기" onClick={() => {}} variant="secondary" />
            <Button label="상담 시작하기" onClick={() => {}} variant="primary" />
          </div>
        </>
      }
      time="오후 10:20"
    />
  );
};

export default ChatWelcomeBox;
