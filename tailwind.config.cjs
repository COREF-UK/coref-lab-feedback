/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: '#343c49'
			},
			fontFamily: {
				sans: ['Exo', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
