

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [   "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pop':['Poppins']
       
      },
      colors: {
        'bg-color': 'rgba(0,128,128,0.6)	',
        'second-bg-color':'rgba(0,128,128,0.1)',
        'text-color':'#C0C0C0',
        'main-color':'rgba(0,128,128,0.8)'

      },
      
    },
   
  },
  plugins: [],
}

