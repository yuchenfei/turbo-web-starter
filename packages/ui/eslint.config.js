import config from '@repo/eslint-config'

/** @type {import("eslint").Linter.Config[]} */
export default [...config.base, ...config.react, ...config.prettier]
