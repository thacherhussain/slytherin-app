import React, {useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NativeBaseProvider} from 'native-base'
import SplashScreen from 'react-native-splash-screen'

import {Home, Characters, SingleCharacter} from './src/screens'

import {theme} from './src/utils/theme'
import {MainStackParamList} from './src/utils/types'

const MainStack = createNativeStackNavigator<MainStackParamList>()

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen name="Characters" component={Characters} />
          <MainStack.Screen
            name="SingleCharacter"
            component={SingleCharacter}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
