/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- CRITICAL: Ensure this path is correct
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'grid-small':
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '32px 32px',
      },
      keyframes: {
        'shine': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        shine: 'shine 8s linear infinite',
      },
    },
  },
  safelist: [
    // Gradient "from-" colors used dynamically
    "from-blue-400",
    "from-purple-500",
    "from-yellow-400",
    "from-orange-500",
    "from-red-400",
    "from-pink-500",
    "from-teal-400",
    "from-cyan-500",
    "from-green-400",
    "from-lime-500",
    "from-red-500",
    "from-pink-600",
    "from-emerald-600",
    // Gradient "to-" colors used dynamically
    "to-purple-500",
    "to-blue-600",
    "to-orange-500",
    "to-yellow-500",
    "to-pink-500",
    "to-red-500",
    "to-cyan-500",
    "to-emerald-600",
    "to-lime-500",
    "to-pink-600",
    // Border colors used dynamically
    "border-gray-600",
    "border-yellow-400",
    "border-red-400",
    "border-teal-400",
    "border-green-400",
    "border-red-500",
    // Text colors used dynamically
    "text-white",
    "text-gray-900",
  ],
  plugins: [],
}