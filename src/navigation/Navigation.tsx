import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useTheme} from 'native-base'

import {MainStackParamList} from './types'
import {
  Home,
  Characters,
  SingleCharacter,
  History,
  SchoolStore,
  Blank,
} from '../screens'

const MainStack = createNativeStackNavigator<MainStackParamList>()

const Navigation = () => {
  const {colors} = useTheme()

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTintColor: colors.tertiary[900],
        }}>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: 'Welcome Slytherins'}}
        />
        <MainStack.Screen name="Characters" component={Characters} />
        <MainStack.Screen name="History" component={History} />
        <MainStack.Screen
          name="SingleCharacter"
          component={SingleCharacter}
          options={({route}) => ({title: route.params.name})}
        />
        <MainStack.Screen
          name="SchoolStore"
          component={SchoolStore}
          options={{title: 'School Store'}}
        />
        <MainStack.Screen name="Blank" component={Blank} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
