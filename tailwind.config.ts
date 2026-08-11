import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#4f46e5',
        'accent-dark': '#3730a3',
        sunshine: '#facc15',
        coral: '#fb7185',
        mint: '#6ee7b7',
        canvas: '#fffdf7',
        black: '#0a0a0a',
        white: '#fafafa',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      boxShadow: {
        brutal: '5px 5px 0px 0px #0a0a0a',
        'brutal-hover': '7px 7px 0px 0px #0a0a0a',
        soft: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'soft-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [typography],
} satisfies Config
