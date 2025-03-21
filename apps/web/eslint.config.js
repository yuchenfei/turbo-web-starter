import {
  gitignore,
  imports,
  javascript,
  prettier,
  react,
  next,
  turbo,
  typescript,
} from '@repo/eslint-config'

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...gitignore,
  ...javascript,
  ...typescript,
  ...imports,
  ...turbo,
  ...react,
  ...next,
  ...prettier,
]
