module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				'qa-black': '#222222',
				'qa-dark-black': ' #454545',
				primary: '#199DA3',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
