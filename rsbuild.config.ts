import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginTypeCheck({
      enable: true,
    }),
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
    define: {
      "process.env.REACT_APP_GITHUB_TOKEN": JSON.stringify(
        process.env.REACT_APP_GITHUB_TOKEN || "",
      ),
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
