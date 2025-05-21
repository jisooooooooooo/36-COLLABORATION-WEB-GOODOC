import { useState } from 'react';
import ChatHeader from '@pages/chat/components/ChatHeader';
import ChatBody from '@pages/chat/components/ChatBody';
import ChatInput from '@pages/chat/components/ChatInput';
import ChatModal from '../components/modal/ChatModal';
import { useChatModal } from '@pages/chat/hooks/useChatModal';
import ExitModal from '../components/modal/ExitModal';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const { modalOpen, openModal, closeModal } = useChatModal();
  const [exitModalOpen, setExitModalOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, message]);
  };

  return (
    <div className="h-screen flex flex-col relative">
      <ChatHeader onBackClick={openModal} onMenuClick={() => setExitModalOpen(true)} />
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <ChatBody messages={messages} />
      </main>
      <ChatInput onSend={handleSendMessage} />
      {modalOpen && <ChatModal open={modalOpen} onClose={closeModal} />}
      {exitModalOpen && <ExitModal open={exitModalOpen} onClose={() => setExitModalOpen(false)} />}
    </div>
  );
};

export default ChatPage;
