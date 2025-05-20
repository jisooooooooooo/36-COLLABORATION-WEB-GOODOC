import { useState } from 'react';

export const useSelectableOption = (defaultLabel: string = '없음') => {
  const [selectedLabel, setSelectedLabel] = useState<string>(defaultLabel);

  const isSelected = (label: string) => selectedLabel === label;

  return {
    selectedLabel,
    setSelectedLabel,
    isSelected,
  };
};
