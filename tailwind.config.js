// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
//const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       fontFamily: {
        body: ["Montserrat"],
      },
      gridTemplateColumns:{
        mainbody: "20vw auto 30vw",
        mainsm: "20vw auto",
      },
      fontSize: {
        sm: ['10px', '10px'],
        
      }
   /*   fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      }, 
      */
    },
  },
  plugins: [],
}
