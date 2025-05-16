import React from 'react';

interface SelectableButtonProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const SelectableButton: React.FC<SelectableButtonProps> = ({
  label,
  isSelected = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[115px] h-[40px] p-[10px] title-semi-14 leading-none rounded-[4px]
      ${isSelected ? 'bg-Blue-3 text-Mainblue border border-Mainblue' : 'bg-White text-WGray border border-WGray-2'}`}
    >
      {label}
    </button>
  );
};

export default SelectableButton;
