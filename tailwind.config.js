// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "lavender-dream": "lavender-dream 5s ease infinite",
        "mystic-aura": "mystic-aura 2s ease infinite",
      },
      keyframes: {
        "lavender-dream": {
          "0%": {
            background:
              "linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
          "50%": {
            background:
              "linear-gradient(-90deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 0%",
          },
          "100%": {
            background:
              "linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
