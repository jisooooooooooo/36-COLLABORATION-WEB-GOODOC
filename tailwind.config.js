import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  safelist: ['font-bold', 'font-semibold', 'text-[1.5rem]', 'leading-[1.25rem]'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [scrollbarHide],
  safelist: ['text-white', 'text-CGray', 'text-CGray-3', 'bg-Mainblue', 'bg-White'],
};
