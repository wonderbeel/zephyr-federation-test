import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { type ModuleFederationOptions, withZephyr } from "vite-plugin-zephyr";

const mfConfig: ModuleFederationOptions = {
  name: "host-app",
  remotes: {
    bar: "http://localhost:5001/assets/bar.js",
    foo: "http://localhost:5002/assets/foo.js",
  },
  shared: ["vue"],
};

export default defineConfig({
  plugins: [
    vue(),
    withZephyr({
      mfConfig,
    }),
  ],
});
