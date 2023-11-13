module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    fontSize: {
      "16px": "16px",
      "20px": "20px",
      "32px": "32px",
      "40px": "40px",
    },
    colors: {
      headerColor: "#8DAEF3",
      textMainColor: "#343434",
      blockColor: "#ABD9F0",
      white: "#FFFFFF",
      secondaryColor: "#D9EBF4",
      black: "#000000",
      blockSecondaryColor: "#D7F2FC",
    },
    extend: {
      boxShadow: {
        outline: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
