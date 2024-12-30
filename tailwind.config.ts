import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'sm': '480px',  // Small devices like mobile
        'md': '768px',  // Tablets and small laptops
        'lg': '1024px', // Larger screens (desktops)
        'xl': '1280px', // Extra large screens (larger desktops)
        '2xl': '1536px', // Extra extra large screens
        'custom': '1400px', // Custom breakpoint
      },
    },
  },
  plugins: [],
} satisfies Config;
