import config from '@repo/eslint-config'
import reactRefresh from 'eslint-plugin-react-refresh'
import viteConfig from './vite.config.js'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config.base,
  {
    settings: {
      'import-x/resolver': [
        {
          vite: {
            viteConfig: viteConfig,
          },
        },
      ],
    },
  },
  ...config.react,
  reactRefresh.configs.vite,
  ...config.prettier,
]
