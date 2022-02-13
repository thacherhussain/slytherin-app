import React, {useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import {NativeBaseProvider} from 'native-base'
import SplashScreen from 'react-native-splash-screen'

import {Home, Data, Another} from './src/screens/Screens'

import {theme} from './src/utils/theme'
import {MainStackParamList} from './src/utils/types'

const MainStack = createNativeStackNavigator<MainStackParamList>()

const papayawhipHeader = {
  headerStyle: {backgroundColor: '#f2f2f2'},
}

const App = () => {
  
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              ...(papayawhipHeader as NativeStackNavigationOptions),
            }}
          />
          <MainStack.Screen name="Data" component={Data} />
          <MainStack.Screen name="Another" component={Another} />
        </MainStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
