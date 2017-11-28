import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.overrideThemeStyles = ({rhythm}) => {
  const linkColor = '#7b3218'
      return {
        a: {
          color: linkColor,
          textDecoration: 'none',
          textShadow: 'none',
          backgroundImage: 'none',
          
        },
        'a:hover,a:active': {
          textShadow: 'none',
          backgroundImage: 'none',
          color: '#000',        
        },
        'strong': {
          color: linkColor
        },
        'h1,h2,h3,h4,h5,h6': {
          marginTop: rhythm(1.2),
          marginBottom: rhythm(0.5),
        }
      }
}

lincolnTheme.googleFonts = [
      {
      name: 'Inconsolata',
      styles: ['700'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
]
lincolnTheme.headerFontFamily = ['Inconsolata', 'monospace'];
lincolnTheme.baseFontSize = '20px';
const typography = new Typography(lincolnTheme)

export default typography