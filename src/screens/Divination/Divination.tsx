import React, {useState} from 'react'
import {
  Box,
  Text,
  Button,
  useTheme,
  Image,
  Link,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Code,
} from 'native-base'

import {Page} from '@components'
import {
  getOwl,
  getPartner,
  getJob,
  getLocation,
  getHousing,
  getPet,
  getPostDarkLordFeeling,
  getKids,
  emmaFortune,
} from './divinationutils'

// function ToggleDarkMode() {
//   const {colorMode, toggleColorMode} = useColorMode()
//   return (
//     <HStack space={2}>
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === 'light' ? true : false}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   )
// }

export const Divination = () => {
  const {colors} = useTheme()
  const [busy, setBusy] = useState<boolean>(false)
  const [fortuneRead, setFortuneRead] = useState<boolean>(false)
  const [fortune, setFortune] = useState<string>('Fortune yet to be told')

  const buttonText = !fortuneRead
    ? 'Divine my fortune'
    : 'Hmm... nah, do it again'

  const getFortune = () => {
    setBusy(true)
    setFortune(
      `You will get your ${getOwl()} OWL. You will work as ${getJob()} in ${getLocation()} and live ${getHousing()}. Your partner will be ${getPartner()} and together you will have a ${getPet()}. ${getKids()}. Even though the dark lord has fallen you still ${getPostDarkLordFeeling()}.`,
    )
    setFortuneRead(true)
    setBusy(false)
  }

  return (
    <Page>
      <Image
        source={require('../../assets/robe-header.jpg')}
        alt={'Slytherin Robes'}
        size={200}
        width={'80%'}
        alignSelf={'center'}
      />
      <Box paddingX={10} paddingY={25}>
        <Button
          backgroundColor={colors.primary[800]}
          isLoading={busy}
          isLoadingText='Asking the spirits...'
          spinnerPlacement='end'
          onPress={() => getFortune()}
        >
          {buttonText}
        </Button>
      </Box>
      <Box alignItems={'center'} paddingX={5}>
        <Text fontSize={'md'}>{fortune}</Text>
      </Box>
      <Box paddingX={10}>
        <Button variant={'unstyled'} onPress={() => setFortune(emmaFortune)}>
          <Text color={'white'}>My name is Emma</Text>
        </Button>
      </Box>
      {/* <Box
        _light={{bg: 'coolGray.50'}}
        _dark={{bg: 'coolGray.900'}}
        minHeight='100vh'
        justifyContent='center'
        px={4}
      >
        <VStack space={5} alignItems='center'>
          <Heading size='lg'>Welcome to NativeBase</Heading>
          <Text>
            Edit <Code>src/App.tsx</Code> and save to reload.
          </Text>
          <Link href='https://docs.nativebase.io' isExternal>
            <Text color='primary.500' underline fontSize={'xl'}>
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Box> */}
    </Page>
  )
}
