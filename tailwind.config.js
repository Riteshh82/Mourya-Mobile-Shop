/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F4",
        ink: "#161B2E",
        marigold: {
          50: "#FFF7E8",
          100: "#FFEBC2",
          400: "#F4A93B",
          500: "#EE9520",
          600: "#D67F12",
        },
        teal: {
          50: "#E9F4F3",
          100: "#C7E4E2",
          400: "#12807E",
          500: "#0E6A68",
          600: "#0A5250",
        },
        navy: {
          50: "#EAEDF3",
          400: "#2A3A63",
          500: "#1B2747",
          600: "#161B2E",
        },
        coral: {
          400: "#F0664B",
          500: "#DD4E33",
        },
      },
      fontFamily: {
        display: ['"Sora"', "sans-serif"],
        body: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 24px -8px rgba(22, 27, 46, 0.18)",
        glow: "0 0 0 1px rgba(244,169,59,0.25), 0 12px 30px -10px rgba(244,169,59,0.35)",
        lift: "0 20px 40px -12px rgba(22, 27, 46, 0.28)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ringPulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        floatSlow: "floatSlow 7s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        ringPulse: "ringPulse 2.2s ease-out infinite",
        fadeInUp: "fadeInUp 0.7s ease-out both",
        popIn: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
      },
    },
  },
  plugins: [],
};
