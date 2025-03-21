import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
// eslint-disable-next-line import-x/default
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import { isPackageInDependencies } from '../utils.js'

/** @type {import("eslint").Linter.Config[]} */
export const react = [
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
  isPackageInDependencies('vite') ? reactRefresh.configs.vite : {},
]
