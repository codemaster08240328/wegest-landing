import { createMuiTheme } from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blue[700],
      light: colors.blue[500],
    },
    secondary: {
      main: colors.grey[700],
      light: colors.grey[500],
    },
    info: {
      main: colors.cyan[500],
      light: colors.cyan[300],
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: '#fff',
    },
    color: {
      indianRed: colors.red[700],
      darkRed: colors.red[900],
      hotPink: colors.pink[300],
      deepPink: colors.pink[500],
      coral: colors.deepOrange[500],
      orange: colors.orange[500],
      gold: colors.yellow[800],
      yellow: colors.yellow[500],
      mediumPurple: colors.deepPurple[400],
      rebeccaPurple: colors.purple[900],
      darkSlateBlue: colors.deepPurple[900],
      lightSeaGreen: colors.teal.A700,
      seaGreen: colors.green[900],
      steelBlue: colors.lightBlue[900],
      blue: colors.blue[500],
      saddleBrown: colors.brown[800],
      brown: colors.deepOrange[900],
      gainsboro: colors.grey[200],
      darkGray: colors.grey[500],
      lightSlateGray: colors.blueGrey[700],
    },
    text: {
      primary: '#000',
    },
  },
  typography: {
    fontSize: 12,

    h4: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '.9rem',
      fontWeight: 600,
    },
    body2: {
      fontSize: '.8rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
  },
})

export default theme
