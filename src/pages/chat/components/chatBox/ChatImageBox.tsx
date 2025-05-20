import { useRef, useState } from 'react';
import ChatBubbleBot from '@/pages/chat/components/chatBox/ChatBubbleBot';
import Button from '@pages/chat/components/Button';
import Toast from '@/pages/chat/components/Toast';
import ImagePreviewList from '@/pages/chat/components/user/ImagePreviewList';
import { formatTime } from '@/shared/utils/date';

interface ChatImageBoxProps {
  onImageUpload?: () => void;
  onImageCountChange?: (count: number) => void;
}

const ChatImageBox: React.FC<ChatImageBoxProps> = ({ onImageUpload, onImageCountChange }) => {
  const timeRef = useRef(formatTime(new Date()));
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [showToast, setShowToast] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [inputType, setInputType] = useState<'gallery' | 'camera' | 'file'>('gallery');

  const handleUploadClick = () => {
    setInputType('gallery');
    setTimeout(() => {
      fileInputRef.current?.click();
    }, 100);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files);

    const newImages = [...images, ...selectedFiles];

    if (newImages.length > 3) {
      setShowToast(true);
      return;
    }

    if (selectedFiles.length > 0 && onImageUpload) {
      onImageUpload();
    }

    setImages(newImages);

    if (onImageCountChange) {
      onImageCountChange(newImages.length);
    }
  };

  return (
    <>
      <div className="relative">
        <ChatBubbleBot
          message={
            <>
              <p className="body-med-14">마지막으로 증상과 관련된 사진을 첨부해주세요.</p>
              <p className="body-med-14">
                최대 3장까지 사진으로 첨부할 수 있어요.
                <span className="text-CGray-4"> (2/3)</span>
              </p>
              <div className="flex gap-[.75rem] mt-[1rem] justify-center w-full">
                <Button label="바로 답변받기" onClick={() => {}} variant="primary" />
                <Button label="사진 올리기" onClick={handleUploadClick} variant="secondary" />
              </div>
            </>
          }
          time={timeRef.current}
        />

        {images.length > 0 && (
          <div className="mt-[.75rem] px-[1.25rem]">
            <ImagePreviewList images={images} />
          </div>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        accept={inputType === 'file' ? '*/*' : 'image/*'}
        multiple
        onChange={handleFileChange}
        className="hidden"
        title="이미지 파일 업로드"
      />

      {showToast && (
        <Toast message="최대 3장까지 첨부할 수 있어요." onClose={() => setShowToast(false)} />
      )}
    </>
  );
};

export default ChatImageBox;
