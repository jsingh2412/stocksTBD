/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        koho: ["KoHo", "sans-serif"],
      },
      fontSize: {
        "5xl": "1.75rem",
        "7xl": "2.25rem",
        "9xl": "3.5rem",
        "11xl": "5rem",
      },
      colors: {
        "primary-green": "#587F5C",
        "secondary-green": "#9db39f",
        "stock-green": "#6ed284",
        "news-green": "#6b9d70",
        "stock-red": "#ff7171",
        "primary-gray": "#DFDFDF",
      },
      screens: {
        sm: "480px", // Small screens
        md: "768px", // Medium screens (default)
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
      },
    },
  },
  plugins: [],
};
