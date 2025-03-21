// eslint-disable-next-line import-x/default
import configPrettier from 'eslint-config-prettier/flat'

/**
 * Turns off all rules that are unnecessary or might conflict with Prettier.
 *
 * THIS CONFIGURATION SHOULD BE USED LAST IN THE CONFIGURATION ARRAY - OTHERWISE, IT MIGHT NOT WORK AS EXPECTED.
 * @see https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration
 *
 * @see https://github.com/prettier/eslint-config-prettier
 *
 * @type {import("eslint").Linter.Config[]} */
export const prettier = [configPrettier]
