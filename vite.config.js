import { defineConfig } from "vite";

import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";
import { webfontDownload } from "vite-plugin-webfont-dl";

function handlebarsOverride(options) {
  const plugin = handlebars(options);
  // Currently handleHotUpdate skips further processing, which bypasses
  // postcss and in turn tailwind doesn't pick up file changes
  delete plugin.handleHotUpdate;
  return plugin;
}

export default defineConfig({
  base: "/starter/", // for deploy to gh-pages base = outDir
  build: {
    outDir: "starter",
  },
  plugins: [
    handlebarsOverride({
      context: {
        title: "Handlebars",
      },
      partialDirectory: resolve(__dirname, "./src/partials"),
    }),
    // handlebars({}),
    webfontDownload(),
  ],
});
