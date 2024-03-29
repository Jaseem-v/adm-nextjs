/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgBlack: "#030304",
        orange: "#E46E00",
        lightOrange: "#F9A825",
        skeleton: "#f5f2f0",
        darkSkeleton: "#a6a8ab",
        mediumSkeleton: "#e4dedb",
        lightBg: '#E5E5E5',
        darkBg: '#dbdbdb',
        brown: '#8B5D33',
        lightGold: '#ffedbc',
        brownBg: '#102036',
        primary: '#102036',
      },
      backgroundImage: {
        logoBg:
          "linear-gradient(180deg, #F5E4BB 50.51%, rgba(255, 166, 0, 0) 151.89%)",
        gold: "linear-gradient(135.12deg, #F8D754 24.95%, #FFF5CF 193.21%)",
        contactUsImg: "url('./assets/images/contactUsImg.png')",
        enlist: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        brownBgInvert: "linear-gradient(to right, #be8a5e, #8B5D33)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kaisei: ["Kaisei Decol", "sans-serif"],
        inter: ["Inter", "Poppins", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        lora: ["Lora", "serif"],
        albra: ['Albra', 'serif'],
        joane: ['Joane', 'serif']
      },
      colors: {
        lightGrey: "#ADADAD",
        darkGrey: "#9F9F9F",
        darkOrange: "#E46E00",
        desc: "rgba(0, 0, 0, 0.6)",
        skeleton: "#f5f2f0",
        darkSkeleton: "#a6a8ab",
        mediumSkeleton: "#e4dedb",
        success: "#48ad70",
        error: "#e5574e",
        lightGold: '#ffedbc',
        textBlack: '#333333',
        descBlack: '#5c5c5c',
        lightBg: '#E5E5E5',
        darkBg: '#dbdbdb',
        brown: '#8B5D33',
        primary: '#102036',
      },
      borderColor: {
        lightGreen: "rgba(63, 130, 119, 0.1)",
      },
      boxShadow: {
        card: "-7px 7px 29px 1px rgba(0, 0, 0, 0.17)",
        eventCard: "0px 4px 51px rgba(0, 0, 0, 0.13)",
      },
    },
  },
  plugins: [],
};
