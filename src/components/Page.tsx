import React, {FC, ReactNode} from 'react'
import {SafeAreaView, ScrollView, StatusBar, useColorScheme} from 'react-native'
import {Box, Text, Flex, useTheme, Center} from 'native-base'

type PageProps = {
  children: ReactNode
  button?: ReactNode
  noScroll?: boolean
  title?: string
  themedBackground?: boolean
}

export const Page: FC<PageProps> = props => {
  const {children, button, noScroll, title, themedBackground} = props
  const isDarkMode = useColorScheme() === 'dark'
  const {colors} = useTheme()

  const backgroundStyle = themedBackground
    ? {height: '100%', backgroundColor: colors.tertiary[100]}
    : {height: '100%', backgroundColor: colors.muted[50]}

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {title ? (
        <Center>
          <Text
            fontSize={'2xl'}
            color={colors.primary[700]}
            fontWeight={'bold'}>
            {title}
          </Text>
        </Center>
      ) : undefined}
      {noScroll ? (
        <Flex paddingY={2}>{children}</Flex>
      ) : (
        <ScrollView>
          <Flex paddingY={2}>{children}</Flex>
        </ScrollView>
      )}
      {button ? <Box marginY={5}>{button}</Box> : null}
    </SafeAreaView>
  )
}
