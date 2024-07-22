/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pblack: '#080705ff',
        beige: '#f2f3d9ff',
        dimGray: '#706563ff',
        melon: '#e5a9a9ff',
        plumWeb: '#e2aeddff',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'gradient-top': 'linear-gradient(0deg, #080705ff, #f2f3d9ff, #706563ff, #e5a9a9ff, #e2aeddff)',
        'gradient-right': 'linear-gradient(90deg, #080705ff, #f2f3d9ff, #706563ff, #e5a9a9ff, #e2aeddff)',
        'gradient-bottom': 'linear-gradient(180deg, #080705ff, #f2f3d9ff, #706563ff, #e5a9a9ff, #e2aeddff)',
        'gradient-left': 'linear-gradient(270deg, #080705ff, #f2f3d9ff, #706563ff, #e5a9a9ff, #e2aeddff)',
        'gradient-top-right': 'linear-gradient(45deg, #080705ff, #f2f3d9ff, #706563ff, #e5a9a9ff, #e2aeddff)',
        'gradient-bottom-right': 'linear-gradient(135deg, #080705ff, #f2f3d9ff, #706563ff, #e5a9a9ff, #e2aeddff)',
        'gradient-top-left': 'linear-gradient(225deg, #080705ff, #f2f3d9ff, #706563ff, #e5a9a9ff, #e2aeddff)',
        'gradient-bottom-left': 'linear-gradient(315deg, #080705ff, #f2f3d9ff, #706563ff, #e5a9a9ff, #e2aeddff)',
        'gradient-radial': 'radial-gradient(#080705ff, #f2f3d9ff, #706563ff, #e5a9a9ff, #e2aeddff)',
    }),
  },
},
  plugins: [],
}