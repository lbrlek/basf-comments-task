import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        basf: {
          black: '#1E1E1E',
          gray: '#ECEEF1',
          blue: '#125CB1',
          red: '#B62323',
          green: '#23B632',
          yellow: '#B3B623',
        },
      },
    },
  },
  plugins: [],
}

export default config
