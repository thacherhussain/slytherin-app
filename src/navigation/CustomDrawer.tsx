import React from 'react'
import {View} from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import {useTheme} from 'native-base'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const CustomDrawer = props => {
  const {colors} = useTheme()

  return (
    <View style={{flex: 1, backgroundColor: colors.tertiary[100]}}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer
