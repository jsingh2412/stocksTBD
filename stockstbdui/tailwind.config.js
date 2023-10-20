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
        "5xl": "2rem",
      },
      colors: {
        "primary-green": "#587F5C",
      },
    },
  },
  plugins: [],
};
