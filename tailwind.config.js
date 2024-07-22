/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Greenlighter: "hsl(148, 38%, 91%)",
        Greenmedium: "hsl(169, 82%, 27%)",
        Red: "hsl(0, 66%, 54%)",
        White: "hsl(0, 0%, 100%)",
        Greymedium: "hsl(186, 15%, 59%)",
        Greydarker: "hsl(187, 24%, 22%)",
        Linkcolor: "hsl(228, 45%, 44%)",
      },
      spacing: {
        128: "32rem",
        130: "40rem",
        140: "45rem",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
//
// -
