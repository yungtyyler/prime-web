import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

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
  plugins: [
    plugin(function ({ addVariant, e, postcss }: any) {
      addVariant("firefox", ({ container, separator }: any) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule: any) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
export default config;
