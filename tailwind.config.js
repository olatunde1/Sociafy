/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',   // Small (phones)
      'md': '768px',   // Medium (tablets)
      'lg': '1024px',  // Large (laptops)
      'xl': '1280px',  // Extra Large (desktops)
      '2xl': '1536px', // 2X Extra Large
    },
  },
  plugins: [],
};
