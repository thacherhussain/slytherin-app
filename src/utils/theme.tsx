import {extendTheme} from 'native-base'

const newTheme = {
  brand: {
    primary: '#0284c7',
    secondary: '#4ade80',
  },
}

export const theme = extendTheme({colors: newTheme})
