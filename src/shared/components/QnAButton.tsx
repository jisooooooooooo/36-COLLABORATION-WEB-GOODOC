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
  left?: string;
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
}: QnAButtonProps) => {
  const className = `flex justify-center items-center rounded-[8px] 
    ${font} ${textColor} ${backgroundColor} ${width} ${px} ${py} ${position} ${bottom}`;

  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
};

export default QnAButton;
