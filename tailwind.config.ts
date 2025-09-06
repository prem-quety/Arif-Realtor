import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  colors: {
    primary: "#121212",
    accent: "#C1973E",
    background: "#FAFAF9",
    heading: "#111827",
    muted: "#6B7280",
    cta: "#9F1239",
  },
  fontFamily: {
    sans: ["Inter", "system-ui", "sans-serif"],
    serif: ["'EB Garamond'", "serif"],
  },
  animation: {
    'fade-in-slow': 'fadeIn 2.5s ease-out forwards',
    'slide-up': 'slideUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    slideUp: {
      '0%': { opacity: '0', transform: 'translateY(30px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
}

  },
  plugins: [],
};

export default config;
