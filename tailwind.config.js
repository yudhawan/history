module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange:'#FE9012',
        maroon: '#822A00',
        navy: '#006B5F',
        sky: '#62BAAC',
      },
      backgroundImage: {
        'banner': "url('./banner.jpg')",
        'banner_mobile': "url('./banner_mobile.png')",
      }
    },
  },
  plugins: [],
}
