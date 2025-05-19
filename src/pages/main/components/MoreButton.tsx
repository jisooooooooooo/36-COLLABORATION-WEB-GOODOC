interface MoreButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const MoreButton = ({ onClick, disabled }: MoreButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full h-[3rem] rounded-[.5rem] border-none bg-CGray-8"
    >
      <div className="title-semi-16 text-CGray-3">병원 더보기</div>
    </button>
  );
};

export default MoreButton;
