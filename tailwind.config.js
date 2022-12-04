/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/component/**/*.{js,ts,jsx,tsx}",
		"./src/icons/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			spacing: {
				nav: "3rem"
			}
		},
		colors: {
			transparent: "transparent",
			primary: "#ff5500",
			secondary: "#333333",
			white: "#ffffff",
			grey: "#cccccc",
			black: "#000000"
		}
	},
	plugins: []
};
