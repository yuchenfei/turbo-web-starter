import pluginTurbo from 'eslint-plugin-turbo'

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
