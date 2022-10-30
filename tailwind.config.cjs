/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// override font sizes
		fontSize: {
			'sm': '0.875rem',
			'base': '1rem',
			'xl': '1.25rem',
			'2xl': '1.6rem',
			'3xl': '2.2rem',
			'4xl': '4.5rem',
			'5xl': '6rem',
		},
		// source code pro for mono and roboto for sans
		fontFamily: {
			'sans': ['Roboto', 'sans-serif'],
			'mono': ['Source Code Pro', 'monospace'],
		},
		extend: {
			colors: {
				'steel-background': '#252630',
			},
		},
	},
	plugins: [],
}
