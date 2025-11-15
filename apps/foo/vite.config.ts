import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { type ModuleFederationOptions, withZephyr } from "vite-plugin-zephyr";

const mfConfig: ModuleFederationOptions = {
  name: "foo",
  filename: "foo.js",
  exposes: {
    "./Button": "./src/components/Button.vue",
  },
  shared: ["vue"],
};

export default defineConfig({
  plugins: [vue(), withZephyr({ mfConfig })],
  build: {
    minify: false,
  },
});
