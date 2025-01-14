import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "0.1rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			backgroundImage: {
				'home-page-card-one': "url('/public/home/card.png')",
				//'footer-texture': "url('/img/footer-texture.png')",
			},
			padding: {
				'9px': '9px',
			},
			fontSize: {
				'4xl': '2rem'
			},
			colors: {
				primary: {
					DEFAULT: '#3563E9',
					100: '#D6E4FD',
					200: '#AEC8FC',
					300: '#85A8F8',
					400: '#658DF1',
					500: '#264BC8',
					600: '#1A37A7',
					700: '#102587',
					800: '#0A196F'
				},
				success: {
					DEFAULT: '#9CD323',
					100: '#F5FCD2',
					200: "#E8FAA6",
					300: "#D3F178",
					400: "#BCE455",
					600: "#7FB519",
					700: "#659711",
					800: "#4C7A0B",
					900: "#3B6506",
				},
				error: {
					DEFAULT: '#FF4423',
					100: '#FFE7D3',
					200: '#FFC8A6',
					300: '#FFA37A',
					400: '#FF7F59',
					600: '#DB2719',
					700: '#B71112',
					800: '#930B16',
					900: '"#7A0619'
				},
				warning: {
					DEFAULT: '#FFC73A',
					100: '#FFF8D7',
					200: '#FFEFB0',
					300: '#FFE488',
					400: '#FFD96B',
					600: '#DBA32A',
					700: '#B7821D',
					800: '#936312',
					900: '#7A4D0B'
				},
				information: {
					DEFAULT: '#54A6FF',
					100: '#DCF3FF',
					200: '#BAE5FF',
					300: '#98D3FF',
					400: '#7EC2FF',
					600: '#3D81DB',
					700: '#2A60B7',
					800: '#1A4393',
					900: '#102E7A'
				},
				secondary: {
					DEFAULT: '#1A202C',
					100: '#E0E9F4',
					200: '#C3D4E9',
					300: '#90A3BF',
					400: '#596780',
					600: '#131825',
					700: '#0D121F',
					800: '#080C19',
					900: '#040815'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
