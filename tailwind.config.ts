import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6176FE",
        light: "#EBECFA",
        green: "#09ad95",
        yellow: "#f9c200",
        gray: "#E2E7F1",
        gray_dark: " #a7a7a7",
      },
    },
  },
  plugins: [],
} satisfies Config;
