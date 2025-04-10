import {
  gitignore,
  imports,
  javascript,
  next,
  perfectionist,
  prettier,
  react,
  turbo,
  typescript,
} from './configs/index.js'
import { isPackageInDependencies } from './utils.js'

const configs = []

configs.push(...gitignore, ...javascript, ...typescript, ...imports, ...turbo)

if (isPackageInDependencies('react')) {
  configs.push(...react)
}

if (isPackageInDependencies('next')) {
  configs.push(...next)
}

configs.push(...perfectionist, ...prettier)

export * from './configs/index.js'

export default configs
