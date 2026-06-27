/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3ecf8e',        // Emerald green (primary)
        'primary-deep': '#24b47e',   // Emerald Deep (hover)
        'primary-soft': '#4ade80',   // Emerald Soft (accent)
        'ink': '#171717',            // Text primary
        'ink-secondary': '#212121', // Text secondary
        'ink-mute': '#707070',       // Text tertiary
        'canvas': '#ffffff',         // Background
        'canvas-night': '#1c1c1c',   // Dark background
        'on-primary': '#171717',     // Near-black for text on primary button
        'on-dark': '#ffffff',        // White for text on dark surfaces
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
