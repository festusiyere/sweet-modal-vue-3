# SweetModal

This library is a fork from [vue sweet modal](https://github.com/visma-meglerfront/sweet-modal-vue) for Vue 3 and Nuxt 3

## Usage

Install SweetModal for Vue.js through npm:

```
npm install sweet-modal-vue-3
```

Install SweetModal for Vue.js through yarn:

```
yarn add sweet-modal-vue-3
```

## Usage/Examples

### Use Globally

```javascript
import SweetModal from 'sweet-modal-vue-3';
import App from './App.vue';

const app = createApp(App);

app.use(SweetModal);
app.mount('#app');
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

## Browser Compatibility

SweetModal should work in most major browsers:

- Safari 9+
- Firefox 20+
- Chrome 20+
- Opera 15+
- Microsoft Edge


 ## Contribution

1. Fork the repository
2. Run `yarn`
3. Run `yarn dev` and start hacking. You can reach the example site at `http://localhost:7777`.
4. When you're done, run one final `yarn build` command and commit your work for a pull request.

### Guidelines

- tabs for indentation, 1 tab = 4 spaces
- camelCase method names
- \_camelCase for private methods
- snake_case computed properties
- snake_case data
- kebab-case attributes
- arrow functions if possible
- be fully ES6 compliant!
