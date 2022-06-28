import React from 'react'
import {useColorScheme} from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useTheme} from 'native-base'

import {MainStackParamList} from './types'
import {
  Home,
  Characters,
  SingleCharacter,
  SortingHat,
  Emblem,
  Traits,
  Salazar,
  BloodyBaron,
  SchoolStore,
  Snakelets,
  Divination,
  Blank,
} from '../screens'

const MainStack = createNativeStackNavigator<MainStackParamList>()

const NavDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'rgb(31, 41, 55)',
  },
}

const NavLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
}

const Navigation = () => {
  const {colors} = useTheme()
  const scheme = useColorScheme()

  return (
    <NavigationContainer
      theme={scheme === 'dark' ? NavDarkTheme : NavLightTheme}
    >
      <MainStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTintColor: colors.tertiary[900],
        }}
      >
        <MainStack.Screen
          name='Home'
          component={Home}
          options={{headerTitle: 'Welcome Slytherins'}}
        />
        <MainStack.Screen name='Characters' component={Characters} />
        <MainStack.Screen
          name='Salazar'
          component={Salazar}
          options={{title: 'Slytherin History'}}
        />
        <MainStack.Screen
          name='SortingHat'
          component={SortingHat}
          options={{title: 'Slytherin History'}}
        />
        <MainStack.Screen
          name='Emblem'
          component={Emblem}
          options={{title: 'Slytherin History'}}
        />
        <MainStack.Screen
          name='Traits'
          component={Traits}
          options={{title: 'Slytherin History'}}
        />
        <MainStack.Screen
          name='BloodyBaron'
          component={BloodyBaron}
          options={{title: 'Slytherin History'}}
        />
        <MainStack.Screen
          name='SingleCharacter'
          component={SingleCharacter}
          options={({route}) => ({title: route.params.name})}
        />
        <MainStack.Screen
          name='SchoolStore'
          component={SchoolStore}
          options={{title: 'School Store'}}
        />
        <MainStack.Screen name='Snakelets' component={Snakelets} />
        <MainStack.Screen name='Divination' component={Divination} />
        <MainStack.Screen name='Blank' component={Blank} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
