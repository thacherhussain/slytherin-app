import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {
  Home,
  Characters,
  SingleCharacter,
  EducationOverview,
  Blank,
} from './screens'

import {MainStackParamList} from './utils/types'
const MainStack = createNativeStackNavigator<MainStackParamList>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerTransparent: true}}>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: 'Welcome Slytherins'}}
        />
        <MainStack.Screen name="Characters" component={Characters} />
        <MainStack.Screen
          name="EducationOverview"
          component={EducationOverview}
        />
        <MainStack.Screen name="SingleCharacter" component={SingleCharacter} />
        <MainStack.Screen name="Blank" component={Blank} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
