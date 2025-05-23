import ChatUser from './ChatUser';

interface Message {
  text: string;
  timestamp: string;
}

interface UserMessageListProps {
  messages: Message[];
  type: 'init' | 'med';
}

const UserMessageList: React.FC<UserMessageListProps> = ({ messages, type }) => {
  return (
    <>
      {messages.map((msg, idx) => (
        <ChatUser key={`${type}-${msg.text}-${idx}`} message={msg.text} time={msg.timestamp} />
      ))}
    </>
  );
};

export default UserMessageList;
