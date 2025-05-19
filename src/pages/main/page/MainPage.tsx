import FilterChip from '@/pages/main/components/FilterChip';
import LocationCategoryFilter from '@/pages/main/components/LocationCategoryFilter';
import MainHeader from '@/pages/main/components/MainHeader';
import LogoCircle from '@/shared/assets/images/LogoCircle.png';
import IconMoon from '@/shared/assets/svg/IconMoon.svg';
import IconCalendar from '@/shared/assets/svg/IconCalendar.svg';
import MoreButton from '@/pages/main/components/MoreButton';
import HospitalListItem from '@/pages/main/components/HospitalListItem';
import Footer from '@/shared/components/Footer';
import { dummyHospitals } from '@/shared/constants/hospitals';

const MainPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[24px] pt-[4px] px-[20px]">
          <MainHeader />
          <LocationCategoryFilter />
        </div>
        <div className="flex overflow-x-auto scrollbar-hide gap-[8px] px-[20px]">
          <FilterChip label="진료중" />
          <FilterChip icon={LogoCircle} label="굿닥병원" hasDropdown={true} />
          <FilterChip icon={IconMoon} label="야간 진료" hasDropdown={true} />
          <FilterChip icon={IconCalendar} label="휴진 날짜 제외" />
        </div>
      </div>

      <section className="flex flex-col gap-[80px] px-[20px] mt-[48px] mb-[36px]">
        <div className="flex flex-col gap-[48px]">
          {dummyHospitals.map(hospital => (
            <HospitalListItem key={hospital.id} {...hospital} />
          ))}
        </div>
        <MoreButton />
      </section>

      <Footer />
    </div>
  );
};

export default MainPage;
