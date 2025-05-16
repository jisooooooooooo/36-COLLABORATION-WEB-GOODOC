interface ChatBubbleBotProps {
  message: React.ReactNode;
  time: string;
}

const ChatUser: React.FC<ChatBubbleBotProps> = ({ message, time }) => {
  return (
    <div className="flex flex-col items-end">
      <div className="bg-CGray-1 text-White body-med-14 px-[.75rem] py-[.625rem] rounded-tl-[.75rem] rounded-br-[.75rem] rounded-bl-[.75rem] max-w-[247px] break-words">
        {message}
      </div>
      <span className="body-med-10 text-CGray-4 mt-[.5rem]">{time}</span>
    </div>
  );
};

export default ChatUser;
