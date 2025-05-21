interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'gray';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', className = '' }) => {
  const buttonStyles =
    variant === 'primary'
      ? 'bg-Blue-3 text-Mainblue'
      : variant === 'secondary'
        ? 'bg-Mainblue text-White'
        : 'bg-WGray-2 text-WGray-1';

  return (
    <button
      onClick={onClick}
      className={`${buttonStyles} w-[115px] h-[40px] border-none rounded-[.5rem]  ${className}`}
    >
      <div className="title-semi-14">{label}</div>
    </button>
  );
};

export default Button;
