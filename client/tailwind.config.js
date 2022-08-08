module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
  
        'md': '768px',
  
        'lg': '998px',
  
        'xl': '1200px',
  
        '2xl': '1440px',
      }

    },
  },
  plugins: [],
}
