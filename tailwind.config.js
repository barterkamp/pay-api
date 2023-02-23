/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', '*.html'],
    theme: {
        fontFamily: {
            dmSerif: ['DMSerifDisplay-Regular', 'serif'],
            publicSans: ['PublicSans', 'sans-serif'],
            // publicSans: ['PublicSans', 'sans-serif'],
            robotoMono: ['RobotoMono', 'monospace'],
        },
        fontSize: {
            base: ['15px', { lineHeight: '28px' }],
            s: ['18px', { lineHeight: '25px' }],
            m: ['24px', { lineHeight: '32px' }],
            l: ['32px', { lineHeight: '40px' }],
            xl: ['48px', { lineHeight: '56px' }],
            '2xl': ['56px', { lineHeight: '56px' }],
            '3xl': ['72px', { lineHeight: '72px' }],
        },
        extend: {
            colors: {
                veryLightBlue: '#EDF3F8',
                darkPink: '#ba4270',
                waterWhite: '#fbfcfe',
                sanJuanBlue: '#36536b',
                sanJuanBlueLight: '#6c8294',
                mirageBlue: '#1b262f',
                charmPink: '#da6d97',
            },
            boxShadow: {
                custom: '10px 10px 25px -10px rgba(54, 83, 107, 0.25)',
            },
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '900px',
                    },
                    '@screen lg': {
                        maxWidth: '900px',
                    },
                    '@screen xl': {
                        maxWidth: '1110px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1110px',
                    },
                },
            });
        },
    ],
};
