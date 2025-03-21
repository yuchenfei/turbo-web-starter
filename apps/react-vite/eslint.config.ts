import {
  importsVite,
  gitignore,
  imports,
  javascript,
  prettier,
  react,
  turbo,
  typescript,
} from '@repo/eslint-config'
import viteConfig from './vite.config.ts'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...gitignore,
  ...javascript,
  ...typescript,
  ...imports,
  ...turbo,
  ...importsVite(viteConfig),
  ...react,
  ...prettier,
]
