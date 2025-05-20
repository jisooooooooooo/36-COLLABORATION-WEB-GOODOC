import BackArrowIcon from '@shared/assets/svg/back-arrow.svg?react';
import MenuIcon from '@shared/assets/svg/menu.svg?react';

interface ChatHeaderProps {
  onBackClick: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onBackClick }) => {
  return (
    <header className="fixed top-0 left-0 w-[23.4375rem] z-10 flex items-center justify-between px-[1.25rem] py-[.5rem] bg-CGray-8 border-b border-[#CACED8]">
      <div className="flex items-center">
        <BackArrowIcon className="w-[2.25rem] h-[2.25rem] cursor-pointer" onClick={onBackClick} />
        <span className="ml-[.5rem] mr-[.25rem] title-semi-14 text-SoftBlack">
          AI 건강매니저 굿봇
        </span>
        <div className="flex items-center justify-center px-[.3125rem] py-[.1875rem] rounded-[.75rem] bg-Mainblue">
          <span className="body-med-10 text-White">상담가능</span>
        </div>
      </div>
      <MenuIcon className="w-[2.25rem] h-[2.25rem] cursor-pointer" />
    </header>
  );
};
export default ChatHeader;
