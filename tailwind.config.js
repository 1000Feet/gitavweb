/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F5EDD9",
        ocean: "#1A4B6E",
        "ocean-light": "#2A6B9A",
        gold: "#D4923A",
        "gold-light": "#E8B668",
        cream: "#FDFAF5",
        "deep-dark": "#0D2535",
        mist: "#E8F0F7",
        "text-body": "#2C3E50",
        "text-light": "#5A7080",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      animation: {
        "slow-zoom": "slowZoom 18s ease-in-out infinite alternate",
        "fade-up": "fadeUp 0.9s forwards",
        bounce: "bounce 2s infinite",
      },
      keyframes: {
        slowZoom: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.06)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
