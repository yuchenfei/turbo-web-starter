import configs, { importsVite } from '@repo/eslint-config'

import viteConfig from './vite.config.ts'

configs.push(...importsVite(viteConfig))

export default configs
