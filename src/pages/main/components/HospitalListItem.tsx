import IconStarBlack from '@/shared/assets/svg/IconStarBlack.svg?react';
import IconStarGray from '@/shared/assets/svg/IconStarGray.svg?react';
import ImgHospitalEmpty from '@/shared/assets/images/ImgHospitalEmpty.png';

export interface HospitalInfo {
  id: number;
  name: string;
  isOpen: boolean | null;
  closeAt: string;
  distance: number;
  address: string;
  department: string;
  review: number | null;
  image: string | null;
}

const HospitalListItem = ({
  name,
  isOpen,
  closeAt,
  distance,
  address,
  department,
  review,
  image,
}: HospitalInfo) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-[9px]">
        <span className="title-bold-18 text-SoftBlack">{name}</span>
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-[13px]">
            {isOpen && (
              <>
                <span className="title-semi-14 text-SoftGreen">진료중</span>
                <span className="title-med-14 text-WGray-1">{closeAt} 진료종료</span>
              </>
            )}
            {!isOpen && <span className="title-semi-14 text-WGray-1">진료시간 병원 문의</span>}
          </div>
          <div className="flex items-center gap-[14px]">
            <span className="title-bold-14 text-SoftBlack">{distance}km</span>
            <span className="title-med-14 text-WGray-1">{address}</span>
          </div>
        </div>
        <div className="flex items-center gap-[13px]">
          <div className="flex items-center gap-[2px]">
            {review && (
              <>
                <IconStarBlack />
                <span className="title-semi-14 text-SoftBlack">{review}</span>
              </>
            )}
            {!review && (
              <>
                <IconStarGray />
                <span className="title-semi-14 text-WGray-1">수집중</span>
              </>
            )}
          </div>
          <span className="caption-med-12 text-WGray-1">{department}</span>
        </div>
      </div>
      {image ? (
        <img src={image} className="w-[76px] h-[76px]" />
      ) : (
        <img src={ImgHospitalEmpty} className="w-[76px] h-[76px]" />
      )}
    </div>
  );
};

export default HospitalListItem;
