import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", ".config/*"]),

  js.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,

  { files: ["**/*.{js,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },

  importPlugin.flatConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: [
      "eslint:recommended",
      "plugin:import/recommended",
      // the following lines do the trick
      "plugin:import/typescript",
    ],
    settings: {
      "import/resolver": {
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        typescript: true,
        node: true,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "import/no-dynamic-require": "warn",
      "import/no-nodejs-modules": "warn",
    },
  },

  tseslint.configs.stylistic,
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
  }),
  {
    files: ["**/*.{js,ts,jsx,tsx}"], plugins: { stylistic }, rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/jsx-one-expression-per-line": "error",
      "@stylistic/no-multiple-empty-lines": "error",
      "@stylistic/comma-dangle": "error",
    },
  },
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "error",
      "linebreak-style": ["error", "windows"],
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);
