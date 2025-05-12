/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], 
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        // Title
        'title-24': '24px',
        'title-20': '20px',
        'title-18': '18px',
        'title-16': '16px',
        'title-14': '14px',

        // Body
        'body-16': '16px',
        'body-14': '14px',
        'body-13': '13px',
        'body-12': '12px',
        'body-10': '10px',

        // Caption
        'caption-13': '13px',
        'caption-12': '12px',
      },
      lineHeight: {
        // Title
        'title-24': '18px',
        'title-20': '24px',
        'title-18': '24px',
        'title-16': '18px',
        'title-14': '22px',

        // Body
        'body-16': '22px',
        'body-14': '20px',
        'body-13': '22px',
        'body-12': '20px',
        'body-10': '20px',

        // Caption
        'caption-13': '18px',
        'caption-12': '20px',
      },
      colors: {
        // Main Colors
        MAINBLUE: '#0073F9',
        BLUE_1: '#E8EDFF',
        BLUE_2: '#F5F8FF',
        BLUE_3: '#E2F0FF',
        SOFTGREEN: '#2CAB6F',
        ERRORRED: '#FF3033',
        SOFTRED: '#FFDDDD',

        // Grays
        SOFTBLACK: '#393939',
        WGRAY: '#5B5E62',
        WGRAY_1: '#828690',
        WGRAY_2: '#F1F1F1',
        WGRAY_3: '#F6F7F9',
        WGRAY_4: '#F9F9F9',
        BLACK: '#000000',
        CGRAY: '#16171C',
        CGRAY_1: '#30343F',
        CGRAY_2: '#434956',
        CGRAY_3: '#5D6373',
        CGRAY_4: '#808699',
        CGRAY_5: '#A8ABBD',
        CGRAY_6: '#CACED8',
        CGRAY_7: '#ECEDF0',
        CGRAY_8: '#F2F3F4',
        WHITE: '#FFFFFF',
      },
    },
  },
  plugins: [],
}