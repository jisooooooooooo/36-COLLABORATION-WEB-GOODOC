import DropdownIcon from '@/shared/assets/svg/IconDownwardArrowSmall.svg?react';

interface FilterChipProps {
  icon?: string;
  label: string;
  hasDropdown?: boolean;
}

const FilterChip = ({ icon, label, hasDropdown = false }: FilterChipProps) => {
  const paddingX = icon ? 'px-[.7813rem]' : 'px-[.9375rem]';

  return (
    <button
      type="button"
      className={`flex-none shrink-0 inline-flex items-center ${paddingX} py-[.4063rem] rounded-full gap-[.25rem] border border-[#F1F1F1]`}
    >
      {icon && <img src={icon} className="w-[1.125rem] h-[1.125rem]" />}
      <span className="title-semi-14 text-WGray">{label}</span>
      {hasDropdown && <DropdownIcon className="w-[.75rem] h-[.75rem] color-[#393939]" />}
    </button>
  );
};

export default FilterChip;
