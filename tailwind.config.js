module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    screens: {
      'sm': '480px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
    }
    ,
    fontFamily: {
      sans: '"Inter"',

      body: '"Inter"',

      number: '"Poppins"',
    },
    extend: {

      colors: {

        unity: {
          gray: '#808191',
          purple: '#6C5DD3',
          orange: '#FF754C',
          green: '#7FBA7A',
          pink: '#FFA2C0',
          blue: '#3F8CFF',
          lightblue: '#A0D7E7',
          darkblue: '#0049C6',
          lightpurple: '#CFC8FF',
        }
      },

      spacing: {
        '22': '5.5rem',
      },

      transitionProperty: {
        'width': 'width'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
