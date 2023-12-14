// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        tabWidth: 4,
        useTabs: true,
        semi: false,
        arrowParens: "avoid",
      },
    },
  ],
};
