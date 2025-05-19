import BackArrowIcon from '@/shared/assets/svg/back-arrow.svg?react';
import LogoText from '@/shared/assets/images/LogoText.png';
import LoginButton from '@/pages/menu/components/LoginButton';
import DownloadButton from '@/pages/menu/components/DownloadButton';
import MenuButton from '@/pages/menu/components/MenuButton';
import HospitalIcon from '@/shared/assets/svg/IconHospitalLine.svg';
import TalkIcon from '@/shared/assets/svg/IconTalk.svg';
import QnaIcon from '@/shared/assets/svg/IconQna.svg';

const MenuPage = () => {
  return (
    <div className="h-screen flex flex-col pt-[1.5rem] px-[1.25rem]">
      <button type="button">
        <BackArrowIcon />
      </button>
      <img src={LogoText} className="w-[6.25rem] h-[2rem] mt-[1rem] mb-[3rem]" />
      <div className="flex flex-col gap-[.75rem]">
        <LoginButton />
        <DownloadButton />
      </div>
      <div className="flex flex-col gap-[1.5rem] mt-[2rem]">
        <MenuButton icon={HospitalIcon} name="병원 찾기" />
        <MenuButton icon={TalkIcon} name="AI 건강 상담" />
        <MenuButton icon={QnaIcon} name="Q&A" />
      </div>
    </div>
  );
};

export default MenuPage;
