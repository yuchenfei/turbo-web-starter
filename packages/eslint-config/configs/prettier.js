import eslintConfigPrettier from 'eslint-config-prettier/flat'

/**
 * Turns off all rules that are unnecessary or might conflict with Prettier.
 *
 * THIS CONFIGURATION SHOULD BE USED LAST IN THE CONFIGURATION ARRAY - OTHERWISE, IT MIGHT NOT WORK AS EXPECTED.
 *
 * @see https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration
 *
 * @type {import("eslint").Linter.Config[]} */
export default [eslintConfigPrettier]
