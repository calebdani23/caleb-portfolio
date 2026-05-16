// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://calebdani23.github.io",
  base: "/caleb-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
