module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e6f0ff',
          300: '#74a9ff',
          500: '#2563eb', // primary blue
          700: '#1e40af',
          900: '#0b1e5a'
        },
        accent: {
          500: '#7c3aed',
          400: '#8b5cf6'
        }
      },
      backgroundImage: {
        'company-theme': "linear-gradient(rgba(6,11,41,0.45), rgba(6,11,41,0.45)), url('/images/theme-bg.jpg')"
      }
    }
  },
  plugins: []
}
