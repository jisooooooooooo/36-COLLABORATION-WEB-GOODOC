import React, { useEffect } from 'react';
import ErrorToast from '@shared/assets/svg/errorIcon.svg?react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="left-1/2 -translate-x-1/2 top-[3.875rem] inline-flex items-center fixed gap-[0.4rem] bg-SoftRed body-med-16 text-ErrorRed px-[0.875rem] py-[1.1rem] rounded-[0.88rem] z-3 whitespace-nowrap">
      <ErrorToast className="w-[0.875rem] h-[0.875rem] shrink-0" />
      <span>{message}</span>
    </div>
  );
};

export default Toast;
