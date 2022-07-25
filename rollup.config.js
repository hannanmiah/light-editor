import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/plugins/editor.js",
    output: [
      {
        format: "esm",
        file: "dist/library.mjs",
      },
      {
        format: "cjs",
        file: "dist/library.js",
      },
      {
        format: "vue",
        file: "dist/library.vue",
      },
    ],
    plugins: [vue(), peerDepsExternal()],
  },
];
