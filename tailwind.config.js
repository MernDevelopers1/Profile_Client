/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px', 
        'xl': '1280px', 
      },
      colors: {
        buttonbg: '#45462A',
      },
      fontFamily: {
        rowdies: ['Rowdies', 'cursive'],
      },
      boxShadow: {
        'customShadow': '0 4px 40px 0 rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'signup-bg': 'linear-gradient(86.95deg, #0C336B 2.52%, #D8BB7A 97.47%);', 
      }
    },
  },
  plugins: [],
}



