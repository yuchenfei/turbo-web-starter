import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import jsxA11y from 'eslint-plugin-jsx-a11y'

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: 'eslint-plugin-react/recommended',
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    settings: { react: { version: 'detect' } },
  },
  {
    name: 'eslint-plugin-react/jsx-runtime',
    ...reactPlugin.configs.flat['jsx-runtime'],
  },
  jsxA11y.flatConfigs.recommended,
  reactHooks.configs['recommended-latest'],
]
