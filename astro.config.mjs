import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://artemshar.github.io",
	output: 'static',
  outDir: './dist',
	integrations: [tailwind()],
});
