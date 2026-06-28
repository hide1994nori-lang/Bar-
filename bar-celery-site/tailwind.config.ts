import type { Config } from "tailwindcss";

export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0d1117",
        foreground: "#ffffff",
        primary: "#86efac",
        secondary: "#161b22",
        border: "#30363d",
        muted: { foreground: "#9ca3af" }
      },
      fontFamily: {
        display: ["serif"]
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in": "fade-in 1s ease forwards",
        "fade-in-up": "fade-in-up 1s ease forwards"
      }
    }
  },
  plugins: []
} satisfies Config;
