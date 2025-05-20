interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'gray';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonStyles =
    variant === 'primary'
      ? 'bg-Blue-3 text-Mainblue'
      : variant === 'secondary'
        ? 'bg-Mainblue text-White'
        : 'bg-WGray-2 text-WGray-1';

  return (
    <button
      onClick={onClick}
      className={`${buttonStyles} w-[7.1875rem] h-[2.5rem] border-none rounded-[.5rem]`}
    >
      <div className="title-semi-14">{label}</div>
    </button>
  );
};

export default Button;
