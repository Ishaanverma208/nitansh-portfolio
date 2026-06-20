/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      colors: {
        navy: {
          DEFAULT: '#0A0F1E',
          light: '#0F1629',
        },
        charcoal: {
          DEFAULT: '#141926',
          light: '#1C2333',
        },
        electric: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
        },
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        offwhite: '#F8FAFC',
        muted: {
          DEFAULT: '#94A3B8',
          dark: '#64748B',
        },
        border: {
          DEFAULT: '#1E293B',
          light: '#334155',
        },
        green: '#10B981',
        red: '#EF4444',
        surface: '#111827',
      }
    },
  },
  plugins: [],
}

