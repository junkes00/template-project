import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import pluginQuery from "@tanstack/eslint-plugin-query";
import prettier from "eslint-config-prettier/flat";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["**/*.config.*", "dist"]),
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginQuery.configs["flat/recommended"],
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,
  jsxA11y.flatConfigs.recommended,

  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    arrowParens: "always",
  }),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      js,
      reactHooks,
      jsxA11y,
      "simple-import-sort": simpleImportSort,
      stylistic,
    },
    extends: ["js/recommended"],
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "linebreak-style": ["error", "windows"],
      "react/button-has-type": "error",
      "no-shadow": "error",
      "react/jsx-no-bind": "warn",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@stylistic/indent": ["error", 2],
      "@stylistic/jsx-one-expression-per-line": "error",
      "@stylistic/no-multiple-empty-lines": "error",
      "@stylistic/comma-dangle": "error",
      "@stylistic/jsx-sort-props": [
        "warn",
        {
          noSortAlphabetically: true,
          ignoreCase: true,
          callbacksLast: true,
          shorthandFirst: true,
          multiline: "last",
          reservedFirst: ["key"],
          reservedLast: ["className"],
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: true,
          },
        },
      ],
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },

  {
    files: ["src/ui/components/ui/**/*.{ts,tsx}"],
    rules: {
      "@stylistic/jsx-sort-props": "off",
      "simple-import-sort/imports": "off",
      "simple-import-sort/exports": "off",
      "react-refresh/only-export-components": "off",
    },
  },

  // always at the last
  prettier,
]);
