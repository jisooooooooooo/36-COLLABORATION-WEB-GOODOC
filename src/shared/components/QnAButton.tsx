interface QnAButtonProps {
  text: string;
  font: string;
  textColor: string;
  backgroundColor: string;
  width: string;
  px: string;
  py: string;
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
