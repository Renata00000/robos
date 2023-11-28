/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",],
  
    theme: {
        
                  fontFamily: {
                        inter: ['Inter', 'sans-serif']
                    },
                    keyframes: {
                        sino_kf: {
                            '0%, 100%': {
                                transform: 'rotate(-10deg)'
                            },
                            '50%': {
                                transform: 'rotate(10deg)'
                            }
                        }
                    },
                    animation: {
                        sino: 'sino_kf 0.31s ease-in-out infinite'
                    }
      
    },
  
  plugins: [],


  }
  