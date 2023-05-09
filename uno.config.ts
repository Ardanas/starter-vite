// uno.config.ts
import { defineConfig } from 'unocss'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetAttributify(),
  ],
})
