interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonStyles = variant === 'primary' ? 'bg-Blue-3 text-Mainblue' : 'bg-Mainblue text-white';
  return (
    <button
      onClick={onClick}
      className={`${buttonStyles} text-[.875rem] leading-[.5rem] font-600 w-[7.1875rem] h-[2.5rem] rounded-[.5rem] p-[1rem] sm:p-[1.25rem] gap-[.25rem] border-none`}
    >
      {label}
    </button>
  );
};

export default Button;
