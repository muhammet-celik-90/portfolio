import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '700px',
      'md': '900px',
      'lg': '1200px',
      'xl': '1500px',
    },
  },
  daisyui: {
    themes: [
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          "primary": "#7ae582",
          "base-100": '#121212'
        },
      }
    ]
  },
}
export default config
