import Chevron from '@shared/assets/svg/chevron-updown.svg?react';
import { deptList } from '@/shared/constants/constant';
import DeptBox from '@pages/qna/qnaList/components/DeptBox';
import { useDeptFilter } from '@pages/qna/hooks/useDeptFilter';
import { motion, AnimatePresence } from 'framer-motion';
// motion: 애니메이션의 initial(첫 마운트 시 상태), animate(끝 상태), transition(처음~끝까지 어떻게 변할 지) 설정 가능한 컴포넌트
// AnimatePresence: 컴포넌트가 언마운트될 때 exit animation 가능하게 해줌

const DeptFilter = () => {
  const { showDeptList, selectedDept, toggleDeptList, selectDept } = useDeptFilter();

  const motionValue = {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <div className="flex flex-col w-[20.9375rem] mt-[2.25rem]">
      <button type="button" className="flex" onClick={toggleDeptList}>
        <span className="title-bold-20 text-CGray-1 mr-[.25rem]">진료과 전체</span>
        <Chevron
          className={`transition-transform duration-300 ${!showDeptList ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* 추후 Framer Motion 등으로 애니메이션 구현 예정 */}
      <AnimatePresence>
        {showDeptList && (
          <motion.div
            variants={motionValue}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeptFilter;
