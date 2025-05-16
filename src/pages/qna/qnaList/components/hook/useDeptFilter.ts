import { useState } from 'react';

export const useDeptFilter = () => {
  const [showDeptList, setShowDeptList] = useState(false);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const toggleDeptList = () => {
    setShowDeptList(prev => !prev);
  };

  const selectDept = (deptName: string) => {
    setSelectedDept(deptName);
  };

  return {
    showDeptList,
    selectedDept,
    toggleDeptList,
    selectDept,
  };
};
