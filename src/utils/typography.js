import Typography from 'typography'
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'

/*
,
  'h3': {
  fontFamily: ['Oswald', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  }
  */

usWebDesignStandardsTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none'
  }
})

delete usWebDesignStandardsTheme.googleFonts

const typography = new Typography(usWebDesignStandardsTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
