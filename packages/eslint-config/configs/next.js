import pluginNext from '@next/eslint-plugin-next'

/**
 * @doc https://nextjs.org/docs/app/api-reference/config/eslint
 * @see https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next
 *
 * @type {import("eslint").Linter.Config[]} */
export const next = [
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
]
