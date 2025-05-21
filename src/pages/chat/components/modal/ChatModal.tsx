import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@pages/chat/components/Button';

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-Overlay w-[23.4375rem] h-[100%]">
      <div className="w-[17.8125rem] bg-White rounded-[0.75rem] py-[1.25rem] flex flex-col items-center">
        <div className="text-center">
          <h2 className="Title_semi_18 text-CGray-2">지금 상담을 그만하시겠어요?</h2>
          <p className="caption-med-12 text-CGray-4 my-[0.5rem]">상담 내용은 저장되지 않습니다.</p>
        </div>

        <div className="flex gap-[0.81rem]">
          <Button
            label="그만둘래요"
            onClick={() => {
              onClose();
              navigate('/');
            }}
            variant="gray"
          />
          <Button label="계속할게요" onClick={onClose} variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
