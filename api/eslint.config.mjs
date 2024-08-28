import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";

const pluginsOptions = {
  prettier: prettierPlugin,
};

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  {
    plugins: {
      ...pluginsOptions,
    },
  },
  
  pluginJs.configs.recommended,
];
