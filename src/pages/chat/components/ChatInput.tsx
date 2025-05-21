import { useState } from 'react';
import SendIcon from '@shared/assets/svg/send.svg?react';
import { sendMessage } from '@/shared/utils/chat';

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('');
  const clearInput = () => setInputValue('');

  return (
    <div className="bg-CGray-8">
      <div className="flex items-center px-[0.75rem] pt-[.5rem] pb-[2.625rem] bg-White rounded-tl-[.5rem] rounded-tr-[.5rem] shadow-[.25rem_-0.25rem_1.25rem_0rem_rgba(0,0,0,0.05)]">
        <input
          type="text"
          placeholder="메시지를 입력하세요."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage(inputValue, onSend, clearInput)}
          className="flex-1 h-[2.5rem] px-[.625rem] py-[.5625rem] border border-[#ECEDF0] rounded-[.75rem] bg-white body-med-14 placeholder:body-med-14 placeholder:text-CGray-6 outline-none"
        />
        <SendIcon
          onClick={() => sendMessage(inputValue, onSend, clearInput)}
          className="w-[1.5rem] h-[1.5rem] ml-[.75rem] cursor-pointer text-CGray-6"
        />
      </div>
    </div>
  );
};

export default ChatInput;
