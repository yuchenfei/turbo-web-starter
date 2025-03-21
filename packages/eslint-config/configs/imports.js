import eslintPluginImportX from 'eslint-plugin-import-x'

/**
 * @see https://github.com/un-ts/eslint-plugin-import-x
 *
 * @see https://github.com/import-js/eslint-import-resolver-typescript
 * @see https://github.com/pzmosquito/eslint-import-resolver-vite
 *
 * @type {import("eslint").Linter.Config[]} */
export const imports = [
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
]

export const importsVite = (viteConfig) => [
  {
    name: 'import-x/vite',
    settings: {
      'import-x/resolver': {
        vite: {
          viteConfig,
        },
      },
    },
  },
]
