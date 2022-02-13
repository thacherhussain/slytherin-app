import React, {FC, ReactNode} from 'react'
import {SafeAreaView, ScrollView, StatusBar, useColorScheme, View} from 'react-native'
import {Button, Box, Text} from 'native-base'

import {Colors} from 'react-native/Libraries/NewAppScreen'

type ButtonBaseProps = {
  text: string
  onButtonPress: () => void
}

export const ButtonBase: FC<ButtonBaseProps> = props => {
  const {text, onButtonPress} = props

  return (
    <Box paddingX={10} paddingBottom={35}>
      <Button backgroundColor={'brand.primary'} onPress={() => onButtonPress()}>{text}</Button>
    </Box>
  )
}

type PageProps = {
  children: ReactNode
  title?: string
  button?: ReactNode
}

export const Page: FC<PageProps> = props => {
  // const {children, showButton, buttonText, onPress} = props
  const {children, button, title} = props
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {title ? 
          (<Box paddingX={5} paddingY={10}>
              <Text fontSize={'4xl'} color={'brand.primary'}>
                {title}
              </Text>
            </Box>) : undefined
        }
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
      {button ? button : null}
    </View>
  )
}
