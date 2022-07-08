import {extendTheme} from 'native-base'

export const theme = extendTheme({
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
    All: 'darkBlue.800',
    Gryffindor: 'danger.800',
    Hufflepuff: 'yellow.500',
    Ravenclaw: 'blue.800',
    Slytherin: 'tertiary.800',
  },
})

type CustomThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
