import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'

export default mergeConfig(
  {
    mode: 'development',
    server: {
      host: '0.0.0.0',
      cors: true, // 开启跨域
      proxy: {
        '/api': {
          target: 'http://47.96.172.109:8105',
          // target: 'http://192.168.3.201:8105',
          changeOrigin: true, // 是否跨域
          rewrite: (path: string) => path.replace(/^\/api/, '') // 将 /api 前缀移除
        }
      }
    }
  },
  baseConfig
)
