import {extendTheme} from 'native-base'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  colors: {
    primary: {
      50: '#e5fcf2',
      100: '#c1f0db',
      200: '#9be5c5',
      300: '#75dcad',
      400: '#50d296',
      500: '#39b87d',
      600: '#2b8f61',
      700: '#1e6745',
      800: '#11472f',
      900: '#00160c',
    },
    secondary: {
      50: '#e1f3ff',
      100: '#b3d8ff',
      200: '#83befc',
      300: '#55a5fb',
      400: '#2e8bfa',
      500: '#1d71e1',
      600: '#1358af',
      700: '#093f7e',
      800: '#00264d',
      900: '#000d1e',
    },
  },
})

export type ITheme = typeof theme
