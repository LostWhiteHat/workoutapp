import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      'purple-8': '#10002B',
      'purple-7': '#240046',
      'purple-6': '#3C096C',
      'purple-5': '#5A189A',
      'purple-4': '#7B2CBF',
      'purple-3': '#9D4EDD',
      'purple-2': '#C77DFF',
      'purple-1': '#E0AAFF',

    },
  },
  plugins: [],
};
export default config;
