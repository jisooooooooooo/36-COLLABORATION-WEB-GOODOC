import DropdownIcon from '@/shared/assets/svg/IconDownwardArrowSmall.svg?react';

interface FilterChipProps {
  icon?: string;
  label: string;
  hasDropdown?: boolean;
}

export default function FilterIconChip({ icon, label, hasDropdown = false }: FilterChipProps) {
  const paddingX = icon ? 'px-[.7813rem]' : 'px-[.9375rem]';

  return (
    <div
      className={`inline-flex items-center ${paddingX} py-[.4063rem] rounded-full gap-[.25rem] border border-[#F1F1F1] title-semi-14 text-WGray`}
    >
      {icon && <img src={icon} className="w-[1.125rem] h-[1.125rem]" />}
      <span>{label}</span>
      {hasDropdown && <DropdownIcon className="w-[.75rem] h-[.75rem] color-[#393939]" />}
    </div>
  );
}
