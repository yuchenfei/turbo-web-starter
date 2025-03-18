import config from '@repo/eslint-config'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config.base,
  {
    settings: {
      'import-x/resolver': {
        typescript: true,
      },
    },
  },
  ...config.react,
  ...config.next,
  ...config.prettier,
]
