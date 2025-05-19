import React, { useRef } from 'react';
import { formatTime } from '@/shared/utils/date';

interface Props {
  images: File[];
}

const ImagePreviewList: React.FC<Props> = ({ images }) => {
  const timeRef = useRef(formatTime(new Date()));

  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-row items-end justify-end gap-[0.4rem]">
        {images.map((file, index) => {
          const objectUrl = URL.createObjectURL(file);
          return (
            <img
              key={index}
              src={objectUrl}
              alt={`preview-${index}`}
              className="w-[5rem] h-[5rem] object-cover rounded-[.75rem]"
              onLoad={() => URL.revokeObjectURL(objectUrl)}
            />
          );
        })}
      </div>
      <span className="body-med-10 text-CGray-4 mt-[.5rem]">{timeRef.current}</span>
    </div>
  );
};

export default ImagePreviewList;
