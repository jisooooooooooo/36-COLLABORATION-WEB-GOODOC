import SendIcon from '@shared/assets/svg/send.svg?react';

const ChatInput: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-tl-[8px] rounded-tr-[8px] shadow-[4px_-4px_20px_0px_rgba(0,0,0,0.05)] px-[16px] py-[12px]">
      <input
        type="text"
        placeholder="메시지를 입력하세요."
        className="flex-1 h-[40px] px-[10px] py-[9px] border border-[#ECEDF0] rounded-[12px] bg-white body-med-14 placeholder:body-med-14 placeholder:text-CGray-6 outline-none"
      />
      <SendIcon className="w-[24px] h-[24px] ml-[12px] cursor-pointer text-CGray-6" />
    </div>
  );
};

export default ChatInput;
