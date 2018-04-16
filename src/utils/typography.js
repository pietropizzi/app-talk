import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Rubik',
      styles: [
        '300',
        '500',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '400'
      ],
    },
  ],
  headerFontFamily: ['Rubik', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  headerWeight: '500',
  headerColor: '#4a4a4a',
  bodyColor: '#4a4a4a',
  overrideStyles: ({ adjustFontSizeTo }) => ({
    h2: adjustFontSizeTo('30px'),
    h3: adjustFontSizeTo('24px')
  })
});

export default typography;
