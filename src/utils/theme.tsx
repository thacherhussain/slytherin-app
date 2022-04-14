import {extendTheme} from 'native-base'

const newTheme = {
  brand: {
    primary: '#3293d6',
    // primary: '#11472f', // Slytherin Green
    secondary: '#4ade80',
  },
}

export const theme = extendTheme({colors: newTheme})
