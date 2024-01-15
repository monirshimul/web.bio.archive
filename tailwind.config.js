/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralBg: "var(--neutralBg)",
        onNeutralBg: "var(--onNeutralBg)",
        primaryBg: "var(--primaryBg)",
        onPrimaryBg: "var(--onPrimaryBg)",
        primary: "var(--primary)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        overPass: ["var(--font-overPass)"],
        catamaran: ["var(--font-catamaran)"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "ping-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
