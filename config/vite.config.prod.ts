import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'
import { resolve } from 'path'

export default mergeConfig(
  {
    mode: 'production',
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, '../src/index.js'),
        name: 'domToVue',
        // the proper extensions will be added
        fileName: 'dom-to-vue',
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue', 'highlight.js', 'vue-clipboard3'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
            'highlight.js': 'hljs',
            'vue-clipboard3': 'VueClipboard3'
          },
        },
      },
    },
  },
  baseConfig
)
