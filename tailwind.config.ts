import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": 'url("/hero-bg-2.jpg")',
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        "prime-platinum": "#CFDBD5",
        "prime-alabaster": "#E8EDDF",
        "prime-saffron": "#F5CB5C",
        "prime-saffron-700": "#E6AD0F",
        "prime-eerie-black": "#242423",
        "prime-jet": "#333533",
      },
      darkMode: "class",
    },
  },
  plugins: [],
};
export default config;
