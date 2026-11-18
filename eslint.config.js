import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["node_modules", "dist"] },
  {
    files: ["**/*.{js,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      "semi": ["error", "always"],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "variableLike", format: ["camelCase"] },
        { selector: "method", format: ["camelCase"] },
        { selector: "typeLike", format: ["PascalCase"] }]
    },
  },
]);