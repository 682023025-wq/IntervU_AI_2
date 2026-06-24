/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0F4C75',   // Biru gelap
        'primary-medium': '#1B5F8C', // Biru sedang
        'primary-light': '#E0F2FE',  // Biru muda
        'primary-bright': '#60A5FA', // Biru terang
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#64748B',
        'bg-secondary': '#F8FAFC',
        'border-light': '#E2E8F0'
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      },
      backdropBlur: {
        'glass': '12px'
      }
    }
  },
  plugins: []
}
