/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#2563eb",
        brandPurple: "#7c3aed",
        brandPink: "#ec4899",
        brandOrange: "#f97316",
        brandGreen: "#10b981",
      },
    },
  },
  plugins: [],
};
