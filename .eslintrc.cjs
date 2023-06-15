/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        // 'prettier/prettier': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': ['off'],
        // These will ignore variables such as router or Router
        'no-unused-vars': ['error', { varsIgnorePattern: '[rR]outer' }]
    }
}
