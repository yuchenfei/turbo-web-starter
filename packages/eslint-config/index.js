import reactRefresh from 'eslint-plugin-react-refresh'
import baseConfig from './configs/base-config.js'
import nextConfig from './configs/next-config.js'
import prettierConfig from './configs/prettier-config.js'
import reactConfig from './configs/react-config.js'

export default {
  react: [...baseConfig, ...reactConfig, ...prettierConfig],
  reactVite: [
    ...baseConfig,
    ...reactConfig,
    reactRefresh.configs.vite,
    ...prettierConfig,
  ],
  next: [...baseConfig, ...reactConfig, ...nextConfig, ...prettierConfig],
}
