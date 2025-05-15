import React from 'react';
import ellipsis from '../../../../shared/assets/svg/ellipsis.svg';

const QNAListItem = () => {
  return (
    <div className="flex flex-col w-[335px]">
      <div className="flex gap-[12.5px]">
        <span className="caption-semi-13">내과</span>
        <img src={ellipsis} alt="ellipsis" />
        <span className="caption-reg-13">22시간 전</span>
      </div>

      <span className="title-semi-18 mt-[10px] line-clamp-2">위고비를 맞아도 되나요?</span>
      <span className="body-reg-14 mt-[8px] line-clamp-2">
        당뇨약을 약하게 먹고 있는데 위고비를 맞아도 될까요?
      </span>
    </div>
  );
};

export default QNAListItem;
