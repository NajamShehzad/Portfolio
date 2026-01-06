import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginTypeCheck({
      enable: true,
    }),
    pluginNodePolyfill(),
  ],
  html: {
    template: "./public/index.html",
    title: "Najam Shehzad",
    favicon: "./public/favicon.ico",
  },
  output: {
    assetPrefix: "/",
    distPath: {
      root: "build",
    },
  },
  source: {
    entry: {
      index: "./src/index.tsx",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  performance: {
    chunkSplit: {
      strategy: "split-by-experience",
    },
  },
});
