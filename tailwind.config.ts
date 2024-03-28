import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      sky1: '#62cff4',
      sky2: '#2c67f2',
      white: '#f0f9ff',
      black: '#000000',
      grey: '#525252'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config