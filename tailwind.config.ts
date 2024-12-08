import type { Config } from "tailwindcss";

const config: Config = {
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
      screens: {
        'xs': '480px',     // Mobile Small
        'sm': '481px',     // Mobile Large
        'md': '769px',     // Tablet
        'lg': '1025px',    // Laptop
        'xl': '1441px',    // Desktop
      },
    },
  },
  plugins: [],
};
export default config;
