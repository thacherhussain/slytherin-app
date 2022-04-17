import {extendTheme} from 'native-base'

const newTheme = {
  brand: {
    primary: '#002851',
    // primary: '#11472f', // Slytherin Green
    secondary: '#4ade80',
  },
}

export const theme = extendTheme({colors: newTheme})
