export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
    padding: {
      DEFAULT: '2rem',  
      sm: '2rem',       
      md: '3rem',       
      lg: '4rem',       
      xl: '5rem',
      '2xl': '6rem',
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
  },
    extend: {
      colors: {
        primary: '#0056b3',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
    },
  },
}
