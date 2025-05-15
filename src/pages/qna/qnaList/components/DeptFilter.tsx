import Chevron from '@shared/assets/svg/chevron-updown.svg?react';

const DeptFilter = () => {
  return (
    <div>
      <button type="button" className="flex">
        <span className="title-bold-20 text-CGray-1 mr-[.25rem]">진료과 전체</span>
        <Chevron />
      </button>
    </div>
  );
};

export default DeptFilter;
