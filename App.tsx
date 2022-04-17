import React, {useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NativeBaseProvider} from 'native-base'
import SplashScreen from 'react-native-splash-screen'

import {
  Home,
  Characters,
  SingleCharacter,
  EducationOverview,
} from './src/screens'

import {Provider} from 'react-redux'

import {theme} from './src/utils/theme'
import {store} from './src/store'
import Navigation from './src/Navigation'

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
