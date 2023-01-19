const prelinePlugin = require('preline/plugin')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['node_modules/preline/dist/*.js', 'index.html'],
	theme: {
	},
	plugins: [prelinePlugin]
}
module.exports = config
