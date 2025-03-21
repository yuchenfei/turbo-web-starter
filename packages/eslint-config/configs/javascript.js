import js from '@eslint/js'

/**
 * @doc https://eslint.org/docs/latest/use/configure/
 * @see https://github.com/eslint/eslint/tree/main/packages/js
 *
 * @type {import("eslint").Linter.Config[]} */
export const javascript = [
  {
    name: 'javascript/recommended',
    ...js.configs.recommended,
  },
]
