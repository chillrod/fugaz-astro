/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Noto Serif Khojki Variable"],
      },
      backgroundImage: {
        star: "url('/star.svg')",
        grid: `linear-gradient(to right, rgb(254 215 170) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(254 215 170) 1px, transparent 1px)`,
        gridRotated: `linear-gradient(to top, rgb(254 215 170) 2px, transparent 1px),
        linear-gradient(to right, rgb(254 215 170) 1px, transparent 1px)`,
      },
      backgroundSize: {
        "star-md": "15%",
        "star-sm": "35%",
        "grid-size": "40px 40px",
      },
      backgroundPosition: {
        "posi-star": "100% 0%",
      },
    },
  },
  plugins: [],
};
