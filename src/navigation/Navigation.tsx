import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
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
const DrawerStack = createDrawerNavigator<MainStackParamList>()

const Navigation = () => {
  const {colors} = useTheme()
  const Drawer = () => {
    return (
      <DrawerStack.Navigator>
        <DrawerStack.Screen name='Home' component={Home} />
        <DrawerStack.Screen name='Characters' component={Characters} />
      </DrawerStack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          // headerTransparent: true,
          headerTintColor: colors.tertiary[900],
        }}
      >
        <MainStack.Screen name='Home' component={Drawer} />
        {/* <MainStack.Screen
          name='Home'
          component={Home}
          options={{headerTitle: 'Welcome Slytherins'}}
        /> */}
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
