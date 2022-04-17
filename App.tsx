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

import {theme} from './src/utils/theme'
import {MainStackParamList} from './src/utils/types'
const MainStack = createNativeStackNavigator<MainStackParamList>()

import {Provider} from 'react-redux'
import {store} from './src/store'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <MainStack.Navigator screenOptions={{headerTransparent: true}}>
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{headerTitle: 'Welcome'}}
            />
            <MainStack.Screen name="Characters" component={Characters} />
            <MainStack.Screen
              name="EducationOverview"
              component={EducationOverview}
            />
            <MainStack.Screen
              name="SingleCharacter"
              component={SingleCharacter}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
