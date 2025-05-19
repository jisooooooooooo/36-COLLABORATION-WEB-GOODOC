import { useState } from 'react';
import CloseIcon from '@/shared/assets/svg/IconClose.svg?react';
import LogoAlert from '@/shared/assets/images/LogoAlert.png';

const PromotionBanner = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="flex items-center gap-[.5rem] bg-Blue-1 px-[.75rem] py-[.6875rem]">
      <button type="button" onClick={() => setVisible(false)}>
        <CloseIcon className="w-[1.5rem] h-[1.5rem]" />
      </button>
      <img src={LogoAlert} className="w-[2.75rem] h-[2.75rem]" />
      <div className="title-semi-14 text-Softblack">
        굿닥- 병원 접수, 병원 예약, 비대면 진료 필수 앱
      </div>
      <button type="button" className="px-[1.625rem] py-[.5625rem] bg-Mainblue rounded-[.5rem]">
        <div className="title-semi-14 text-White text-nowrap">다운로드</div>
      </button>
    </div>
  );
};

export default PromotionBanner;
