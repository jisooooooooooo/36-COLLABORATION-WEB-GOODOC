import { useState } from 'react';
import IconSearch from '@/shared/assets/svg/IconSearch.svg?react';
import BackArrow from '@/shared/assets/svg/back-arrow.svg?react';

const QnASearch = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex justify-between items-center mt-[24px] gap-4 w-[20.9375rem]">
      <button type="button">
        <BackArrow className="w-[2.25rem] h-[2.25rem]" />
      </button>
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={e => setQuery(e.target.value)}
          className="w-full h-[2.875rem] border border-[#CACED8] rounded-[.375rem] body-med-16 text-CGray-2"
        />
        {query === '' && !isFocused && (
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center pl-[1.125rem] pr-[.75rem] gap-[.4375rem] pointer-events-none">
            <IconSearch className="w-[1.5rem] h-[1.5rem]" />
            <span className="body-med-16 text-CGray-5">증상, 질문 검색</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QnASearch;
