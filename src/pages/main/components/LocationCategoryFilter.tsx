import MapIcon from '@/shared/assets/svg/IconMap.svg?react';
import DropdownIcon from '@/shared/assets/svg/IconDownwardArrow.svg?react';

export default function LocationCategoryFilter() {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="flex items-center gap-[4px]">
        <MapIcon className="w-[32px] h-[32px]" />
        <span className="title-bold-20 text-SoftBlack">공릉동</span>
        <DropdownIcon className="w-[24px] h-[24px]" />
      </div>
      <div className="flex items-center gap-[4px]">
        <span className="title-reg-20 text-SoftBlack">진료과 전체</span>
        <DropdownIcon className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
}
