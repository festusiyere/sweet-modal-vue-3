# SweetModal

This library is a fork from [vue sweet modal](https://github.com/visma-meglerfront/sweet-modal-vue) for Vue 3, Nuxt 3 and Nuxt 4.

## Usage

Install SweetModal for Vue.js through npm:

```
npm install sweet-modal-vue-3
```

Install SweetModal for Vue.js through yarn:

```
yarn add sweet-modal-vue-3
```

# Usage/Examples

## For Vue 3
### Use Globally

```javascript
import { createApp } from 'vue'

const app = createApp({})

app.component(SweetModal)
app.mount('#app')
```

or

```javascript
import SweetModal from 'sweet-modal-vue-3'
import App from './App.vue'

const app = createApp(App)

app.component(SweetModal)
app.mount('#app')
```

### Use per Component

```javascript
import { SweetModal, SweetModalTab } from 'sweet-modal-vue-3'

{
	components: {
		SweetModal,
		SweetModalTab
	}

	...
}
```

### Using SFC and TypeScript

```typescript
import { SweetModal, SweetModalTab } from 'sweet-modal-vue-3'

const modal = ref<InstanceType<typeof SweetMOdal> | null>(null)

const openModal = () => {
	modal.value?.open()
}

const closeModal = () => {
	modal.value?.close()
}
```

## For Nuxt 3

### Use Globally

```javascript
import SweetModal from 'sweet-modal-vue-3'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('SweetModal', SweetModal)
})

```

### Using SFC and TypeScript
If you are experiencing a typescript error when using SweetModal in Nuxt 3 and Nuxt 4, you can create a global type or custom type

```typescript
  class SweetModalComponent extends Vue {
    open(tabId: string): void
    close(): void
  }

  type SweetModalType = InstanceType<typeof SweetModalComponent>
```

```typescript
import { SweetModal, SweetModalTab } from 'sweet-modal-vue-3'

const modal = ref<SweetModalType>()

const openModal = () => {
	modal.value?.open()
}

const closeModal = () => {
	modal.value?.close()
}
```

## Browser Compatibility

SweetModal should work in most major browsers:

-   Safari 9+
-   Firefox 20+
-   Chrome 20+
-   Opera 15+
-   Microsoft Edge

## Contribution

1. Fork the repository
2. Run `yarn`
3. Run `yarn dev` and start hacking. You can reach the example site at `http://localhost:3000`.
4. When you're done, run one final `yarn build` command and commit your work for a pull request.

### Guidelines

-   tabs for indentation, 1 tab = 4 spaces
-   camelCase method names
-   \_camelCase for private methods
-   snake_case computed properties
-   snake_case data
-   kebab-case attributes
-   arrow functions if possible
-   be fully ES6 compliant!
