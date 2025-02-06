/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customred: "#db0018",
        customblack: "#e0e0e0",
        darkyellow: "#e0be00"
      },
      fontFamily: {
        oswald: ['Oswald', 'cursive'],
        redhat: ['Red Hat Display', 'cursive'],
      },
      backgroundImage: {
        'bgbanner': "url('./src/assets/ban1.jpg')",
      }
    },
  },
  plugins: [],
}



