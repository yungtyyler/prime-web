import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'url("/hero-bg-2.jpg")',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
      },
      colors: {
        'prime-purple-500': '#7A209E',
        'prime-purple-700': '#561670',
        'prime-green-500': '#C1FF00',
        'prime-green-700': '#85B000',
        'dark-charcoal': '#333333',
        'bright-gray': '#EEEEEE'
      },
      darkMode: 'class',
    },
  },
  plugins: [],
}
export default config
