import Alert from '@shared/assets/svg/chatAlert.svg?react';
import ChatConsiderationBox from '@pages/chat/components/chatBox/ChatConsiderationBox';
import ChatQuestionBox from '@pages/chat/components/chatBox/ChatQuestionBox';
import ChatWelcomeBox from '@pages/chat/components/chatBox/ChatWelcomeBox';

const NOTICE_MESSAGE = '익명으로 공개하니 안심하세요';

const ChatBody: React.FC = () => {
  return (
    <section className="bg-CGray-8 h-full flex flex-col pb-[5rem]">
      <div className="flex items-center py-[.94rem] pl-[1rem] gap-[.25rem]">
        <Alert className="w-[1rem] h-[1rem]" aria-hidden="true" />
        <p className="title-semi-14 text-Mainblue">{NOTICE_MESSAGE}</p>
      </div>
      <div>
        <ChatWelcomeBox />
        <ChatConsiderationBox />
        <ChatQuestionBox />
      </div>
    </section>
  );
};

export default ChatBody;
