/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import MetaLayouts from 'vite-plugin-vue-meta-layouts'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        // presets
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: './auto-imports.d.ts',
      dirs: ['src/composables'],
      eslintrc: {
        enabled: true, // <-- this
      },
      vueTemplate: true,
    }),
    Components({ dirs: ['src/components/'], dts: true }),
    MetaLayouts(),
    Pages({
      dirs: 'src/views',
    }),
    VueMacros({
      plugins: {
        // vue: Vue(),
        // vueJsx: VueJsx(), // 如果需要
      },
    }),
  ],
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse'],
    },
  },
})
