/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "space-dark": "#1A1A2E",
        "space-light": "#F7FFF7",
        "space-primary": "#FF6B6B",
        "space-secondary": "#4ECDC4",
        "space-accent": "#FFE66D",
        "space-bg": "#0a0a1a",
      },
      fontFamily: {
        space: ["Space Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-glow": "pulse 2s ease-in-out infinite",
        stars: "animateStars 100s linear infinite",
        "stars-2": "animateStars 150s linear infinite",
        "stars-3": "animateStars 200s linear infinite",
      },
      keyframes: {
        animateStars: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(1000px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
