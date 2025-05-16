import { useState } from 'react';
import IconSearch from '@/shared/assets/svg/IconSearch.svg?react';
import BackArrow from '@/shared/assets/svg/back-arrow.svg?react';

const QnASearch = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex justify-between items-center gap-4 w-[20.9375rem]">
      <button type="button">
        <BackArrow className="w-[36px] h-[36px]" />
      </button>
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={e => setQuery(e.target.value)}
          className="w-full h-[46px] border border-[#CACED8] rounded-[6px] body-med-16 text-CGray-2"
        />
        {query === '' && !isFocused && (
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center pl-[18px] pr-[12px] gap-[7px] pointer-events-none">
            <IconSearch className="w-[24px] h-[24px]" />
            <span className="body-med-16 text-CGray-5">증상, 질문 검색</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QnASearch;
