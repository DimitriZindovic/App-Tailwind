module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./assets/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient_purple: "#463ADD",
        gradient_pink: "#FF00FB",
        bg_white: "#F9F9F9",
        bg_soft_blue: "#F0F0F3",
        text_black: "#1E1F24",
        text_gray: "#81828C",
        button_blue: "#463ADD",
        button_content: "#FCFDFF",
        border_tag: "#E7E8EC",
        bg_tag: "#F9F9FB",
        tag: "#CDCED6",
      },
    },
  },
  plugins: [],
};
