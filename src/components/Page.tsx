import React, {FC, ReactNode} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native'
import {Box, Text, Flex} from 'native-base'

import {Colors} from 'react-native/Libraries/NewAppScreen'

type PageProps = {
  children: ReactNode
  button?: ReactNode
  noScroll?: boolean
  title?: string
}

export const Page: FC<PageProps> = props => {
  const {children, button, noScroll, title} = props
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <View>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {title ? (
          <Box paddingX={5} paddingY={10}>
            <Text fontSize={'4xl'} color={'brand.primary'}>
              {title}
            </Text>
          </Box>
        ) : undefined}
        {noScroll ? (
          <Flex paddingY={2}>{children}</Flex>
        ) : (
          <ScrollView>
            <Flex paddingY={2}>{children}</Flex>
          </ScrollView>
        )}
        {button ? <Box>{button}</Box> : null}
      </SafeAreaView>
    </View>
  )
}
