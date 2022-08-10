import React, { useState } from 'react'
import { Box, Text, Button, useTheme, Image } from 'native-base'

import { Page } from '@components'
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

export const Divination = () => {
  const { colors } = useTheme()
  const [busy, setBusy] = useState<boolean>(false)
  const [fortuneRead, setFortuneRead] = useState<boolean>(false)
  const [fortune, setFortune] = useState<string>('Fortune yet to be told')

  const buttonText = !fortuneRead
    ? 'Divine my fortune'
    : 'Hmm... nah, do it again'

  const getFortune = () => {
    setBusy(true)
    setFortune(
      `You will get your ${getOwl()} OWL. You will work as ${getJob()} in ${getLocation()} and live ${getHousing()}. Your partner will be ${getPartner()} and together you will have a ${getPet()}. ${getKids()}. Even though the dark lord has fallen you still ${getPostDarkLordFeeling()}.`
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
    </Page>
  )
}
