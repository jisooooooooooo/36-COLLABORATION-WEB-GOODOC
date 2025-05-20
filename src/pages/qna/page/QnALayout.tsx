import { Outlet } from 'react-router';
import QnASearch from '@/pages/qna/qnaList/components/QnASearch';
import Footer from '@/shared/components/Footer';
import PromotionBanner from '@/shared/components/PromotionBanner';

const QnALayout = () => {
  return (
    <div className="flex flex-col items-center mb-[9.1875rem]">
      <PromotionBanner />
      <QnASearch />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default QnALayout;
