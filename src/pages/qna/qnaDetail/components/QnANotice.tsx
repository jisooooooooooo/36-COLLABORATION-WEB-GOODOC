import { noticeList } from '@/shared/constants/notice';

const QnANotice = () => {
  return (
    <section className="mb-[3rem] w-full px-[1.25rem]" aria-label="유의사항 안내">
      <h2 className="mb-[0.5rem] title-bold-14 text-CGray-2">유의해주세요</h2>
      <div>
        {noticeList.map((notice, index) => (
          <div key={index} className="flex items-start body-bold-13 text-CGray-4">
            <span className="mx-[0.2rem] leading-[1.375rem]">ㆍ</span>
            <span>{notice}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QnANotice;
