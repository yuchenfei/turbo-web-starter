// https://nextjs.org/docs/app/api-reference/config/eslint#running-lint-on-staged-files

import path from 'node:path'
import process from 'node:process'

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

export default {
  '*.{js,mjs,json,css,md}': 'prettier --write',
  '*.{ts,tsx}': [buildEslintCommand, 'prettier --write', () => 'tsc --noEmit'],
}
