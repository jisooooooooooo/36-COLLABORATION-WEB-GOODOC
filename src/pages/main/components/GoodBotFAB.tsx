import GoodBotFABImage from '@/shared/assets/images/ImgGoodbotFAB.png';

const GoodBotFAB = () => {
  return (
    <button
      type="button"
      className="flex inline-flex items-center rounded-full bg-White border border-[#ECEDF0] shadow-[0_0px_20px_rgba(0,0,0,0.1)] py-[8px] pl-[20px] pr-[12px]"
    >
      <div className="flex flex-col gap-[2px]">
        <span className="body-med-10 text-Mainblue text-left">AI 건강매니저</span>
        <span className="title-bold-16 text-Mainblue text-left">굿봇</span>
      </div>
      <img src={GoodBotFABImage} className="w-[45px] h-[45px]" />
    </button>
  );
};

export default GoodBotFAB;
