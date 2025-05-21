import { useNavigate } from 'react-router-dom';
import GroupIcon from '@/shared/assets/svg/Group.svg?react';

interface ExitModalProps {
  open: boolean;
  onClose: () => void;
}

const ExitModal: React.FC<ExitModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-20 flex items-end w-[23.4375rem] h-full bg-Overlay"
      onClick={handleBackdropClick}
    >
      <div
        className="flex rounded-t-[0.75rem] bg-White w-full px-[1.25rem] pt-[1.31rem] pb-[3.435rem]
                  shadow-[4px_-4px_20px_0px_rgba(0,0,0,0.10)]"
      >
        <div className="flex items-center gap-[0.5rem] cursor-pointer">
          <GroupIcon className="m-[0.18rem]" />
          <span className="title-semi-16 text-SoftBlack" onClick={() => navigate('/')}>
            상담 나가기
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExitModal;
