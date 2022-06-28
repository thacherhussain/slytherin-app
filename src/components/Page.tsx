import React, {FC, ReactNode} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Appearance,
} from 'react-native'
import {Box, Text, Flex, useTheme, Center} from 'native-base'

type PageProps = {
  children: ReactNode
  button?: ReactNode
  noScroll?: boolean
  title?: string
}

export const Page: FC<PageProps> = props => {
  const {children, button, noScroll, title} = props
  // const isDarkMode = useColorScheme() === 'dark'
  const isDarkMode = Appearance.getColorScheme() === 'dark'
  const {colors} = useTheme()

  // TODO: how to control overall dark/light mode from system settings

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {title ? (
        <Center>
          <Text
            fontSize={'2xl'}
            color={colors.primary[700]}
            fontWeight={'bold'}
          >
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
