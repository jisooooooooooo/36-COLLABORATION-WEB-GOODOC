import Chevron from '@shared/assets/svg/chevron-updown.svg?react';
import DeptBox from './DeptBox';
import { deptList } from '@/shared/constants/constant';
import { useState } from 'react';

const DeptFilter = () => {
  const [showDeptList, setShowDeptList] = useState(false);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const handleDeptListClick = () => {
    setShowDeptList(!showDeptList);
  };

  const handleDeptBoxClick = (deptName: string) => {
    setSelectedDept(deptName);
  };

  return (
    <div className="flex flex-col w-full ml-[20px] mt-[20px]">
      <button type="button" className="flex" onClick={handleDeptListClick}>
        <span className="title-bold-20 text-CGray-1 mr-[.25rem]">진료과 전체</span>
        <Chevron
          className={`transition-transform duration-300 ${!showDeptList ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* 추후 Framer Motion 등으로 애니메이션 구현 예정 */}
      {showDeptList && (
        <div className="scrollbar-hide overflow-x-auto mt-[20px]">
          <div className="flex flex-wrap gap-x-[8px] gap-y-[12px] min-w-[1150px] px-4 py-2">
            {deptList.map((dept, index) => (
              <DeptBox
                key={index}
                deptName={dept}
                isSelected={dept === selectedDept}
                onBoxClick={() => handleDeptBoxClick(dept)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeptFilter;
