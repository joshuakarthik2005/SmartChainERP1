import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Ignore unescaped quotes in JSX
      "@typescript-eslint/no-unused-vars": "warn", // Show warnings instead of errors for unused vars
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type in TypeScript
      "@next/next/no-img-element": "off", // Allow using <img> instead of Next.js <Image />
    },
  },
];

export default eslintConfig;
