/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
      },
      colors: {
        mainbg: "var(--mainbg)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        copy: "var(--copy)",
        copylight: "var(--copylight)",
      },
      dropShadow: {
        logoDropShadow: "0.25rem 0.25rem 0rem  rgb(100, 255, 218)",
      },
    },
  },
  plugins: [],
};
