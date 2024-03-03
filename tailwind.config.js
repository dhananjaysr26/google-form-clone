/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        github: "#211F1F",
        linkedin: "#0077B5",
        twitter: "#1DA1F2",
      },
    },
  },
  plugins: [],
};
