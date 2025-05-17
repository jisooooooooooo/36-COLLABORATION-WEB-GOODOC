import Chevron from '@shared/assets/svg/chevron-updown.svg?react';
import { deptList } from '@/shared/constants/constant';
import DeptBox from '@pages/qna/qnaList/components/DeptFilter/DeptBox';
import { useDeptFilter } from '@pages/qna/qnaList/components/hook/useDeptFilter';

const DeptFilter = () => {
  const { showDeptList, selectedDept, toggleDeptList, selectDept } = useDeptFilter();

  return (
    <div className="flex flex-col w-[20.9375rem] mt-[1.25rem]">
      <button type="button" className="flex" onClick={toggleDeptList}>
        <span className="title-bold-20 text-CGray-1 mr-[4px]">진료과 전체</span>
        <Chevron
          className={`transition-transform duration-300 ${!showDeptList ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* 추후 Framer Motion 등으로 애니메이션 구현 예정 */}
      {showDeptList && (
        <div className="scrollbar-hide overflow-x-auto mt-[1.25rem] w-[20.9375rem]">
          <div className="flex flex-wrap gap-x-[.5rem] gap-y-[.75rem] min-w-[71.875rem] px-4 py-2">
            {deptList.map(dept => (
              <DeptBox
                key={dept}
                deptName={dept}
                isSelected={dept === selectedDept}
                onBoxClick={() => selectDept(dept)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeptFilter;
