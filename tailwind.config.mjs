/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        monsans: ["var(--font-montserrat)"],
        loritalic: ["var(--font-lora)"]
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      "autumn",
      "aqua",
    ],
  },
};
