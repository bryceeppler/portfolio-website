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
			'4xl': '3rem',
			'5xl': '6rem',
		},
		fontFamily: {
			sans: ['Titillium Web', 'sans-serif'],
		},
		extend: {
			colors: {
				'steel-background': '#262D3A',
			},
		},
	},
	plugins: [],
}
