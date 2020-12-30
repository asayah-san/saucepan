module.exports = {
	important: true,
	purge: {
		enabled: true,
		content: [
			'./src/**/*.html',
			'./src/**/*.tsx',
			'./src/**/*.js'
		]
	},
	darkMode: false, // or 'media' or 'class',
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'Sans-serif']
			},
			gridTemplateColumns: {
				'auto-sauce': 'repeat(auto-fill, minmax(196px, 1fr))',
			},
			gridTemplateRows: {
				'auto-sauce': 'repeat(auto-fit, 196px)',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
