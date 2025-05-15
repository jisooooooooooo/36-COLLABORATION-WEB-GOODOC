import BackArrowIcon from '@shared/assets/svg/back-arrow.svg?react';
import MenuIcon from '@shared/assets/svg/menu.svg?react';

const ChatHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-[20px] py-[8px] border-b border-[#CACED8]">
      <div className="flex items-center">
        <BackArrowIcon className="w-[36px] h-[36px] cursor-pointer" />
        <span className="ml-[8px] mr-[4px] title-semi-14 text-SoftBlack">AI 건강매니저 굿봇</span>
        <div className="flex items-center justify-center px-[5px] py-[3px] rounded-[12px] bg-Mainblue">
          <span className="body-med-10 text-White">상담가능</span>
        </div>
      </div>
      <MenuIcon className="w-[36px] h-[36px] cursor-pointer" />
    </header>
  );
};
export default ChatHeader;
