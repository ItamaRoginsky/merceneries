import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["node_modules", "dist"] },
  {
    files: ["**/*.{js,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-multiple-empty-lines": ["error", { max: 1 }],
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