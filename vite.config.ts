import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn } from 'vite-plugin-monkey'
import VueDevTools from 'vite-plugin-vue-devtools'
import Unocss from 'unocss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar(),
    // https://github.com/posva/unplugin-vue-router
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: {
          // '': 'default_name', // if not set, will get from package.json
          zh: '油猴脚本', // TODO: change to your own name
        },
        icon: 'https://vitejs.dev/logo.svg', // TODO: change to your own icon
        namespace: 'npm/vite-plugin-monkey', // TODO: change to your own namespace
        match: ['https://neumorphism.io/*'], // TODO: change to your own match
        // include: [/^https:\/\/i\.\.li\/.*/],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
    Unocss(),
    VueDevTools(),
    tsconfigPaths(),
  ],
})
