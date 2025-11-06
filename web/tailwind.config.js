/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#f6f3ee',
          dark: '#0e1418',
        },
        bg2: {
          light: '#ffffff',
          dark: '#0e141b',
        },
        fg: {
          light: '#0c0f12',
          dark: '#e6ebf0',
        },
        muted: {
          light: '#5c6773',
          dark: '#9aa7b4',
        },
        accent: {
          light: '#2b6cb0',
          dark: '#5fa8ff',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
