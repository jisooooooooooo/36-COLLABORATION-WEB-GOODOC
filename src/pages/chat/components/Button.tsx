interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonStyles = variant === 'primary' ? 'bg-Blue-3 text-Mainblue' : 'bg-Mainblue text-White';
  return (
    <button
      onClick={onClick}
      className={`${buttonStyles} w-[115px] h-[40px] border-none rounded-[.5rem]`}
    >
      <div className="title-semi-14">{label}</div>
    </button>
  );
};

export default Button;
