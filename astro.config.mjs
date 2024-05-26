import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://ailuka.github.io",
	output: 'static',
  outDir: './dist',
	integrations: [tailwind()],
});
