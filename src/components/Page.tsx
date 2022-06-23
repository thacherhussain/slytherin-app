import React, {FC, ReactNode} from 'react'
import {SafeAreaView, ScrollView, StatusBar, useColorScheme} from 'react-native'
import {
  Box,
  Text,
  Flex,
  useTheme,
  Center,
  HStack,
  Switch,
  useColorMode,
  useColorModeValue,
} from 'native-base'

type PageProps = {
  children: ReactNode
  button?: ReactNode
  noScroll?: boolean
  title?: string
  themedBackground?: boolean
}

function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <HStack space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  )
}

export const Page: FC<PageProps> = props => {
  const {children, button, noScroll, title, themedBackground} = props
  const isDarkMode = useColorScheme() === 'dark'
  const {colors} = useTheme()

  // const backgroundStyle = themedBackground
  //   ? {
  //       height: '100%',
  //       backgroundColor: useColorModeValue('tertiary.800', 'coolGray.800'),
  //     }
  //   : {
  //       height: '100%',
  //       backgroundColor: useColorModeValue('warmGray.50', 'coolGray.800'),
  //     }
  //   const backgroundStyle = themedBackground
  //     ? {height: '100%', backgroundColor: colors.tertiary[100]}
  //     : {height: '100%', backgroundColor: colors.muted[50]}

  // const backgroundStyle = {backgroundColor: useColorModeValue('warmGray.50', 'coolGray.800')}

  // TODO: how to control overall dark/light mode from system settings
  // TODO: how to set background of SafeAreaView based on dark/light mode

  return (
    // <SafeAreaView style={backgroundStyle}>
    <SafeAreaView>
      <Box bg={useColorModeValue('warmGray.50', 'coolGray.800')}>
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
        <ToggleDarkMode />
        {button ? <Box marginY={5}>{button}</Box> : null}
      </Box>
    </SafeAreaView>
  )
}
