import pluginTurbo from 'eslint-plugin-turbo'

/** @type {import("eslint").Linter.Config[]} */
export const turbo = [
  {
    name: 'turbo',
    plugins: {
      turbo: pluginTurbo,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
]
