/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        StrongCyan: "hsl(171, 66%, 44%)",
        LightBlue: "hsl(233, 100%, 69%)",
        // Neutral
        DarkGrayishBlue: "hsl(210, 10%, 33%)",
        GrayishBlue: "hsl(201, 11%, 66%)",
        facebook: "#1877F2",
        twitter: "#1DA1F2",
        insta: "#E4405F",
      },
      fontFamily: {
        BaiJamjuree: "Bai Jamjuree, sans-serif",
      },
      backgroundImage: {
        mobile: 'url("/images/bg-header-mobile.png")',
        desktop: 'url("/images/bg-header-desktop.png")',
      },
      boxShadow: {
        btnCyan: "0px 3px 2px 0px hsl(170, 100%, 30%) ",
        btnBlue: "0px 3px 2px 0px hsl(233, 100%, 60%) ",
      },
      animation: {
        slideLeft: "slideLeft .5s linear",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },

  plugins: [],
};
