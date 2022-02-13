/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC, ReactNode} from 'react'
import {SafeAreaView, ScrollView, StatusBar, useColorScheme, View, Button} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'

type InitialProps = {
  children: ReactNode
  // showButton?: boolean
  // buttonText: string
  // onPress: () => void
}

const Initial: FC<InitialProps> = props => {
  // const {children, showButton, buttonText, onPress} = props
  const {children} = props
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
      <View style={{paddingBottom: 40}}>
        <Button title={'buttonText'} onPress={() => console.log('hello')}>Hello</Button>
      </View>
    </View>
  )
}

export default Initial
