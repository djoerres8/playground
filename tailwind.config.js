const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './resources/views/tailwind.txt',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    ],
    theme: {
        colors: {
            'transparent': 'transparent',
            'current': 'currentColor',
            'black': colors.black,
            'white': colors.white,
            'green': colors.green,
            'red': colors.red,
            'slate': colors.slate,
            'blue': {
                100: '#e7eff7',
                200: '#c3d7ea',
                300: '#9ebfdd',
                400: '#5690c4',
                500: '#0d60aa',
                600: '#0c5699',
                700: '#003D64',
                800: '#062b48',
                900: '#041d33',
            },
            'light-blue': {
                100: '#eaf7fc',
                200: '#caeaf8',
                300: '#aaddf3',
                400: '#72CEFF',
                500: '#0097dB',
                600: '#2799cb',
                700: '#1a6688',
                800: '#134d66',
                900: '#0d3344',
            },
            'gray': {
                100: '#fafaf9',
                200: '#f6f6f6',
                300: '#eae9e9',
                400: '#dbd9d8',
                500: '#cbc8c7',
                600: '#b7b4b3',
                700: '#7a7877',
                800: '#5b5a5a',
                900: '#3d3c3c',
            },
            'yellow': {
                100: '#fffaea',
                200: '#fff3cb',
                300: '#ffecac',
                400: '#ffde6e',
                500: '#ffd030',
                600: '#e6bb2b',
                700: '#997d1d',
                800: '#735e16',
                900: '#4d3e0e',
            },
            'orange': {
                100: '#feecdc',
                200: '#fcd9bd',
                300: '#fdba8c',
                400: '#ff8a4c',
                500: '#ff5a1f',
                600: '#d03801',
                700: '#b43403',
                800: '#8a2c0d',
                900: '#73230d',
            },
        },
        container: {
            center: true,
        },
        extend: {
            backgroundSize: {
                'hidden': '0 0',
            },
            fontFamily: {
                sans: [
                    'Open Sans',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            fontSize: {
                '3xs': '0.5rem',
                '2xs': '0.625rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
