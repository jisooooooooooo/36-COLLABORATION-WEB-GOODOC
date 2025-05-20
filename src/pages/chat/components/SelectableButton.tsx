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
      disabled={!onClick}
      className={`w-[7.1875rem] h-[2.5rem] p-[.625rem] title-semi-14 leading-none rounded-[.25rem]
      ${isSelected ? 'bg-Blue-3 text-Mainblue border border-Mainblue' : 'bg-White text-WGray border border-WGray-2'} 
      ${!onClick ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );
};

export default SelectableButton;
