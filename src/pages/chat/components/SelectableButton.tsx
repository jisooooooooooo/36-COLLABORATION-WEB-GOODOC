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
      className={`w-[7.1875rem] h-[2.5rem] p-[.62rem] text-[.875rem] leading-none rounded-[.25rem]
      ${isSelected ? 'bg-Blue-3 text-Mainblue border border-Mainblue' : 'bg-White text-WGray border border-WGray-2'}`}
    >
      {label}
    </button>
  );
};

export default SelectableButton;
