module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    fontSize: {
      "12px": "12px",
      "16px": "16px",
      "20px": "20px",
      "32px": "32px",
      "40px": "40px",
    },
    screens: {
      "max-sm": "450px",
    },
    colors: {
      headerColor: "#8DAEF3",
      textMainColor: "#343434",
      blockColor: "#ABD9F0",
      white: "#FFFFFF",
      secondaryColor: "#D9EBF4",
      black: "#000000",
      blockSecondaryColor: "#D7F2FC",
      hoverButton: "#ABE8FF",
      selectedColor: "#7de4ff",
    },
    extend: {
      boxShadow: {
        outline: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        bgHello: "url('/src/shared/assets/bg-hello.jpg')",
      },
    },
  },
  plugins: [],
};
