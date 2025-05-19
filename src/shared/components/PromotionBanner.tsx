import { useState } from 'react';
import CloseIcon from '@/shared/assets/svg/IconClose.svg?react';
import LogoAlert from '@/shared/assets/images/LogoAlert.png';

const PromotionBanner = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="flex items-center gap-[8px] bg-Blue-1 px-[12px] py-[11px]">
      <button type="button" onClick={() => setVisible(false)}>
        <CloseIcon className="w-[24px] h-[24px]" />
      </button>
      <img src={LogoAlert} className="w-[44px] h-[44px]" />
      <div className="title-semi-14 text-Softblack">
        굿닥- 병원 접수, 병원 예약, 비대면 진료 필수 앱
      </div>
      <button type="button" className="px-[26px] py-[9px] bg-Mainblue rounded-[8px]">
        <div className="title-semi-14 text-White text-nowrap">다운로드</div>
      </button>
    </div>
  );
};

export default PromotionBanner;
