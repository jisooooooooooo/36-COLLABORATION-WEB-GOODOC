interface QnAButtonProps {
  text: string;
  font: string; // ex: 'title-semi-18'
  textColor: string; // ex: 'text-CGray'
  backgroundColor: string; // ex: 'bg-White'
  width: string; // ex: 'w-full' or 'w-[100px]'
  px: string; // ex: 'px-[1rem]'
  py: string; // ex: 'py-[0.5rem]'
  position?: string; // fixed 등
  bottom?: string;
  onClick?: () => void;
}

const QnAButton = ({
  text,
  font,
  textColor,
  backgroundColor,
  width,
  px,
  py,
  position = '',
  bottom = '',
  onClick,
}: QnAButtonProps) => {
  const className = `flex justify-center items-center rounded-[.5rem] 
    ${font} ${textColor} ${backgroundColor} ${width} ${px} ${py} ${position} ${bottom}`;

  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default QnAButton;
