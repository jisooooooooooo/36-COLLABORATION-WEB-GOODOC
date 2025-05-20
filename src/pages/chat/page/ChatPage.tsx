import ChatHeader from '@pages/chat/components/ChatHeader';
import ChatBody from '@pages/chat/components/ChatBody';
import ChatInput from '@pages/chat/components/ChatInput';
import ChatModal from '@pages/chat/components/ChatModal';
import { useChatModal } from '@pages/chat/hooks/useChatModal';

const ChatPage: React.FC = () => {
  const { modalOpen, openModal, closeModal } = useChatModal();

  return (
    <div className="h-screen flex flex-col relative">
      <ChatHeader />
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <ChatBody onOpenModal={openModal} />
      </main>
      <ChatInput />
      <ChatModal open={modalOpen} onClose={closeModal} onContinue={closeModal} />
    </div>
  );
};

export default ChatPage;
