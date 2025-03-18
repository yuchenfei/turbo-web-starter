import js from '@eslint/js'
import gitignore from 'eslint-config-flat-gitignore'
import turboPlugin from 'eslint-plugin-turbo'
import tseslint from 'typescript-eslint'

/** @type {import("eslint").Linter.Config[]} */
export default [
  gitignore(),
  {
    name: 'eslint/js/recommended',
    ...js.configs.recommended,
  },
  ...tseslint.configs.recommended,
  {
    name: 'config-turbo',
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
]
