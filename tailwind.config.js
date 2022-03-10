module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sofia': ['Sofia', 'cursive'],
        'Roboto': ['Roboto', 'sans-serif'],
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Fredoka': ['Fredoka', 'cursive'],
      },
      backgroundImage: {
        'banner_mobile': "url('./candi_mobile.png')",
        'banner': "url('./candi2.png')",
      }
    },
  },
  plugins: [],
}
// Roborto 300,400,500