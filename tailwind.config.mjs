/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animated'

export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  plugins: [animate],
  theme: {
    extend: {
      animation: {
        'fade-down': 'fade-down 0.5s ease-out'
      },
      keyframes: {
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  }
}
