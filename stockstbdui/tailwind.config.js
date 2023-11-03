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
      },
      colors: {
        "primary-green": "#587F5C",
        "secondary-green": "#9db39f",
        "stock-green": "#6ed284",
        "news-green": "#6b9d70",
        "stock-red": "#ff7171",
        "primary-gray": "#DFDFDF",
      },
    },
  },
  plugins: [],
};
