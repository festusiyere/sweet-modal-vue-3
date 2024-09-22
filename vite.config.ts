import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
	plugins: [vue(), cssInjectedByJsPlugin()],
	resolve: {
		alias: {
			'@/': new URL('./src/', import.meta.url).pathname,
		},
	},

	build: {
		cssCodeSplit: true,
		target: 'esnext',
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'SweetModalVue3',
			fileName: (format) => `sweet-modal-vue-3.${format}.js`,
		},

		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
});
