import MapIcon from '@/shared/assets/svg/IconMap.svg?react';
import DropdownIcon from '@/shared/assets/svg/IconDownwardArrow.svg?react';

const LocationCategoryFilter = () => {
  return (
    <div className="flex items-center gap-[.75rem]">
      <div className="flex items-center gap-[.25rem]">
        <MapIcon className="w-[2rem] h-[2rem]" />
        <span className="title-bold-20 text-SoftBlack">공릉동</span>
        <button type="button" className="border-none">
          <DropdownIcon className="w-[1.5rem] h-[1.5rem]" />
        </button>
      </div>
      <div className="flex items-center gap-[.25rem]">
        <span className="title-reg-20 text-SoftBlack">진료과 전체</span>
        <button type="button" className="border-none">
          <DropdownIcon className="w-[1.5rem] h-[1.5rem]" />
        </button>
      </div>
    </div>
  );
};

export default LocationCategoryFilter;
