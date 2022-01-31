module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        primary: '#0f171e',
        secondary:'#1a242f',
        fontsec:'#79b8f3',
        star: '#ff9e00',
        thumbs: '#fafafa',
        film: 'rgba(191, 213, 214)',
        calendar: 'peachpuff'
      },
      fontFamily:{
        'sans':["'Open Sans'", 'sans-serif']
      
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'auto': 'repeat(auto-fill, minmax(220px, 1fr))',
      },
    },
  },
  plugins: [],
}