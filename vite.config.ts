import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools(), cssInjectedByJsPlugin()],
    build: {
        cssCodeSplit: true,
        target: 'esnext',
        lib: {
            entry: path.resolve(__dirname, 'src/sweet-modal-vue-3.ts'),
            name: 'sweet-modal-vue-3',
            fileName: (format: string) => `sweet-modal-vue.${format}.js`
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
