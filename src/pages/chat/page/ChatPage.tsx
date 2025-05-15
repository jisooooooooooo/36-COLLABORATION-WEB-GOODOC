import ChatHeader from '@pages/chat/components/ChatHeader';
import ChatBody from '@pages/chat/components/ChatBody';
import ChatInput from '@pages/chat/components/ChatInput';

const ChatPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <ChatHeader />
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <ChatBody />
      </main>
      <ChatInput />
    </div>
  );
};

export default ChatPage;
