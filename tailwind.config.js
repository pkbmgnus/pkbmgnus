/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: '#008080',
      darkPrimary: '#015858',
      // secondary: '#FF9D01',
      secondary: '#0F81C7',
      yellow: '#FF9D01',
      green: '#317B74',
      blue: '#0F81C7',
      gray: '#8D8B8A',
      graySoft: '#EFEFEF',
      black: '#323232',
      white: '#ffffff',
    },

    extend: {
      fontFamily: {
        // sans: ['Open Sans', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen sm': {
            maxWidth: '640px',
            // maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '768px',
            // maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '1280px',
            // maxWidth: '100%',
            paddingLeft: '7.5rem',
            paddingRight: '7.5rem',
          },
          '@screen xl': {
            maxWidth: '1900px',
            // maxWidth: '100%',
          },
        },
      });
    },
  ],
};
