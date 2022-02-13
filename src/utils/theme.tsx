import {extendTheme} from 'native-base'

const newTheme = {
  brand: {
    primary: '#11472f',
    secondary: '#4ade80',
  },
}

export const theme = extendTheme({colors: newTheme})
