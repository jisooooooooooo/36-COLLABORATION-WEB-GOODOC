import { Outlet } from 'react-router';
import QnASearch from '../qnaList/components/QnASearch';
import Footer from '@/shared/components/Footer';

const QnALayout = () => {
  return (
    <div className="flex flex-col items-center mb-[9.1875rem]">
      <QnASearch />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default QnALayout;
