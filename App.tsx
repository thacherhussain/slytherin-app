import React, {useEffect} from 'react'
import {NativeBaseProvider} from 'native-base'
import {Provider} from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import {theme, ITheme} from './src/utils/theme'
import {store} from './src/store'
import Navigation from './src/navigation/Navigation'

declare module 'native-base' {
  interface ICustomTheme extends ITheme {}
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
