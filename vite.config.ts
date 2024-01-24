import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn } from 'vite-plugin-monkey'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueDevTools from 'vite-plugin-vue-devtools'
import Unocss from 'unocss/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue'],
      dts: 'src/typed-router.d.ts',
      routesFolder: 'src/pages',
    }),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: {
          // '': 'default_name', // if not set, will get from package.json
          zh: '油猴脚本', // TODO: change to your own name
        },
        icon: 'https://vitejs.dev/logo.svg', // TODO: change to your own icon
        namespace: 'npm/vite-plugin-monkey', // TODO: change to your own namespace
        match: ['*://*/*'], // TODO: change to your own match
        // include: [/^https:\/\/i\.\.li\/.*/],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/head',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
      ],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
    Unocss(),
    VueDevTools(),
    tsconfigPaths(),
  ],
})
