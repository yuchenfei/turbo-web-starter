import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

export const isPackageInDependencies = (packageName, cwd = process.cwd()) => {
  try {
    const packageJsonPath = path.join(cwd, 'package.json')
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
      ...packageJson.peerDependencies,
      ...packageJson.optionalDependencies,
    }

    return packageName in allDeps
  } catch {
    return false
  }
}
