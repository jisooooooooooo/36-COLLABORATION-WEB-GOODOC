import FilterChip from '@/pages/main/components/FilterChip';
import LocationCategoryFilter from '@/pages/main/components/LocationCategoryFilter';
import MainHeader from '@/pages/main/components/MainHeader';
import LogoCircle from '@/shared/assets/images/LogoCircle.png';
import IconMoon from '@/shared/assets/svg/IconMoon.svg';
import IconCalendar from '@/shared/assets/svg/IconCalendar.svg';
import MoreButton from '@/pages/main/components/MoreButton';
import HospitalListItem from '@/pages/main/components/HospitalListItem';
import Footer from '@/shared/components/Footer';
import GoodBotFAB from '@/pages/main/components/GoodBotFAB';
import PromotionBanner from '@/shared/components/PromotionBanner';
import { dummyHospitals } from '@/shared/constants/hospitals';
import { usePagination } from '@/pages/main/hooks/UsePagination';
import { useNavigate } from 'react-router';

const MainPage = () => {
  const { data: hospitals, hasMore, loadMore } = usePagination(dummyHospitals, 7);

  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleGoodBotClick = () => {
    navigate('/chat');
  };

  return (
    <div>
      <PromotionBanner />
      <div className="flex flex-col gap-[1rem]">
        <div className="flex flex-col gap-[1.5rem] pt-[.75rem] px-[1.25rem]">
          <MainHeader onClick={handleMenuClick} />
          <LocationCategoryFilter />
        </div>
        <div className="flex overflow-x-auto scrollbar-hide gap-[.5rem] px-[1.25rem]">
          <FilterChip label="진료중" />
          <FilterChip icon={LogoCircle} label="굿닥병원" hasDropdown={true} />
          <FilterChip icon={IconMoon} label="야간 진료" hasDropdown={true} />
          <FilterChip icon={IconCalendar} label="휴진 날짜 제외" />
        </div>
      </div>

      <section className="flex flex-col gap-[5rem] px-[1.25rem] mt-[3rem] mb-[2.25rem]">
        <div className="flex flex-col gap-[3rem]">
          {hospitals.map(hospital => (
            <HospitalListItem key={hospital.id} {...hospital} />
          ))}
        </div>
        {hasMore && <MoreButton onClick={loadMore} />}
      </section>

      <Footer />

      <div className="fixed bottom-[4.625rem] right-[1.25rem]">
        <GoodBotFAB onClick={handleGoodBotClick} />
      </div>
    </div>
  );
};

export default MainPage;
