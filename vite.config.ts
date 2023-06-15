import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import typescript2 from 'rollup-plugin-typescript2'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        cssInjectedByJsPlugin(),
        typescript2({
            check: false,
            include: ['src/components/*.vue'],
            tsconfigOverride: {
                compilerOptions: {
                    sourceMap: true,
                    declaration: true,
                    declarationMap: true
                },
                exclude: ['vite.config.ts']
            }
        })
    ],

    build: {
        cssCodeSplit: false,
        lib: {
            entry: './src/sweet-modal-vue-3.ts',
            formats: ['es', 'cjs'],
            name: 'sweet-modal-vue-3',
            fileName: (format: string) => (format === 'es' ? 'sweet-modal-vue-3.js' : 'sweet-modal-vue-3.cjs')
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
