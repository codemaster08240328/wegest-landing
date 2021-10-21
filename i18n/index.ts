import { InitOptions } from 'i18next'
import en_resources from './en.lang'

const options: InitOptions = {
	lng: 'en',
	debug: true,
	resources: {
		en: en_resources,
	},
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
}

export default options
