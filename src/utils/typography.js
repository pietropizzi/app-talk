import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Rubik',
      styles: [ '300', '500', ],
    },
    {
      name: 'Roboto',
      styles: [ '400' ],
    },
    {
      name: 'Fira Mono',
      styles: ['400']
    }
  ],
  headerFontFamily: ['Rubik', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  headerWeight: '500',
  headerColor: '#4a4a4a',
  bodyColor: '#222',
  overrideStyles: ({ adjustFontSizeTo }) => ({
    h2: {
      ...adjustFontSizeTo('24px'),
      margin: 0
    },
    h3: {
      ...adjustFontSizeTo('20px'),
      margin: 0
    }
  })
});

export default typography;
