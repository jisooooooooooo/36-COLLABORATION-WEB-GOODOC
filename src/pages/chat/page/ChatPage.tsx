import ChatHeader from '../components/ChatHeader';
import ChatBody from '../components/ChatBody';
import ChatInput from '../components/ChatInput';

const ChatPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <ChatHeader />
      <main className="flex-1 overflow-y-auto">
        <ChatBody />
      </main>
      <ChatInput />
    </div>
  );
};

export default ChatPage;
