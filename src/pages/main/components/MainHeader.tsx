import { useState } from 'react';
import LogoHeader from '@/shared/assets/images/Logoheader.png';
import IconMenu from '@/shared/assets/svg/IconMenu.svg?react';
import IconSearch from '@/shared/assets/svg/IconSearch.svg?react';

interface MainHeaderProps {
  onClick: () => void;
}

const MainHeader = ({ onClick }: MainHeaderProps) => {
  const [query, setQuery] = useState('');

  return (
    <header className="flex justify-between items-center gap-4">
      <img src={LogoHeader} className="w-[2.25rem] h-[2.25rem]" />
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full bg-WGray-3 rounded-[.375rem] border-none body-med-16 text-CGray-2"
        />
        {query === '' && (
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center pl-[1.125rem] gap-[.4375rem] pointer-events-none">
            <IconSearch className="w-[1.5rem] h-[1.5rem]" />
            <span className="body-med-16 text-CGray-5">지역, 진료과, 병원명 검색</span>
          </div>
        )}
      </div>
      <button type="button" onClick={onClick} className="border-none">
        <IconMenu className="w-[2.25rem] h-[2.25rem]" />
      </button>
    </header>
  );
};

export default MainHeader;
