import ImageMark from '@shared/assets/svg/ImageMark.svg?react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-start mt-[1.25rem] mb-[9.1875rem]">
      <div className="w-full h-[.0625rem] border-t border-[#ECEDF0]"></div>

      <div className="flex flex-col mt-[5rem] ml-[1.25rem] gap-[2.25rem]">
        <div className="flex gap-[2rem] text-CGray-2 title-bold-16">
          <span>회사소개</span>
          <span>병원・약국 가입문의</span>
          <span>이용약관</span>
        </div>

        <span className="title-bold-16 text-CGray">개인정보 처리방침</span>

        <div className="flex flex-col gap-[.5rem]">
          <span className="title-bold-14 text-CGray-2">주식회사 굿닥</span>

          <div className="flex flex-col body-bold-13 text-CGray-4">
            <span>대표 임지석</span>
            <span>서울특별시 강남구 역삼로 2길 16, 8-9층</span>
            <span>사업자등록번호 431 - 88 - 01818</span>
            <span>통신판매업신고번호 제2020-서울강남-00257호</span>
            <span>gdsc@goodoc.co.kr</span>
          </div>
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <span className="title-bold-14 text-CGray-2">고객센터</span>

          <div className="flex flex-col body-bold-13 text-CGray-4">
            <span>1661-8173</span>
            <span>운영시간 09:00 ~ 19:00</span>
          </div>
        </div>

        <button
          type="button"
          className="w-fit rounded-[.5rem] px-[1.25rem] py-[1rem] border border-[#ECEDF0]"
        >
          <span className="title-bold-14 text-WGray">1:1 채팅상담</span>
        </button>

        <p className="caption-semi-13 text-CGray-4">All right reserved. ©goodoc</p>
      </div>

      <div className="border-t-[.0625rem] border-[#ECEDF0] mt-[1.5rem] mx-[1.25rem]">
        <div className="flex mt-[1.5rem] gap-[1rem] items-center">
          <ImageMark />

          <div className="flex flex-col body-semi-12 text-CGray-4">
            <p>[인증범위] 굿닥 서비스 플랫폼</p>
            <p>[유효기간] 2024. 02. 07 - 2027. 02. 06</p>
          </div>
        </div>

        <p className="body-semi-12 text-CGray-4 break-keep mt-[1.3125rem]">
          (주)굿닥은 의료정보의 중개서비스 또는 의료정보중개시스템의 제공자로서, 의료정보의 당사자가
          아니며, 의료정보와 관련된 의무와 책임은 각 의료기관에게 있습니다.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
