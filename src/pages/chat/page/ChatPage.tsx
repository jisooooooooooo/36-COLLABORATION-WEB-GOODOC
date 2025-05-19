import { useState } from 'react';
import ChatHeader from '@pages/chat/components/ChatHeader';
import ChatBody from '@pages/chat/components/ChatBody';
import ChatInput from '@pages/chat/components/ChatInput';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, message]);
  };

  return (
    <div className="h-screen flex flex-col">
      <ChatHeader />
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <ChatBody messages={messages} />
      </main>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatPage;
