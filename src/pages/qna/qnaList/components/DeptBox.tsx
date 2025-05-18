interface DeptBoxProps {
  deptName: string;
  isSelected: boolean;
  onBoxClick: () => void;
}

const DeptBox = ({ deptName, isSelected, onBoxClick }: DeptBoxProps) => {
  return (
    <button
      type="button"
      className={`flex border rounded-[.25rem] items-center justify-center p-[.625rem] w-[5.9375rem]
        ${isSelected ? 'border-[#5B5E62]' : 'border-[#F1F1F1]'}
      `}
      onClick={onBoxClick}
    >
      <span className="title-semi-14 text-WGray">{deptName}</span>
    </button>
  );
};

export default DeptBox;
