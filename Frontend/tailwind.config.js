/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  fontFamily: {
    sans: ["ui-sans-serif", "system-ui"],
    serif: ["Georgia", "ui-serif"],
    mono: ["ui-monospace", "SFMono-Regular"],
  },
  theme: {
    extend: {
      colors: {
        "custom-blue": "#103b5e",
        "navbar-blue": "#2b5b84",
        "select-blue": "#3776ab",
        "back-color": "#f9f9f9",
      },
    },
  },
  plugins: [],
};

