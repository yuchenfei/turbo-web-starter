export default {
  '*.{js,mjs,json,css,md}': 'prettier --write',
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write', () => 'tsc --noEmit'],
}
