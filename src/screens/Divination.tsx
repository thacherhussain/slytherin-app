import React, {useState} from 'react'
import {Box, Text, Button, useTheme, Image} from 'native-base'

import {Page} from '@components'

export const Divination = () => {
  const {colors} = useTheme()
  const [busy, setBusy] = useState<boolean>(false)
  const [fortuneRead, setFortuneRead] = useState<boolean>(false)
  const [fortune, setFortune] = useState<string>('Fortune yet to be told')

  const buttonText = !fortuneRead
    ? 'Divine my fortune'
    : 'Hmm... nah, do it again'

  const getNumber = (items: number): number => Math.floor(Math.random() * items)

  const generateRandomItem = (optionsArray: string[]): string => {
    const randomNumber = getNumber(optionsArray.length)
    return optionsArray[randomNumber]
  }

  const getOwl = (): string =>
    generateRandomItem(['potions', 'quidditch', 'transfiguration'])

  const getPartner = (): string =>
    generateRandomItem(['Severus Snape', 'Ginny Weasley', 'Newt Scamander'])

  const getJob = (): string =>
    generateRandomItem([
      'an Auror',
      'a Professor',
      'a Broom Salesman',
      'a Ministry Middle Manager',
      'a Quidditch Referee',
    ])

  const getLocation = (): string =>
    generateRandomItem([
      'London',
      'Sydney',
      'Scotland',
      'Los Angeles',
      'San Francisco',
    ])

  const getHousing = (): string =>
    generateRandomItem([
      'in the Shrieking Shack',
      'at Malfoy Manor',
      'at 12 Grimmauld Place',
      'at 4 Privet Drive',
      'on a Farm',
      'in a Skyscraper',
      'in the Burrow',
    ])

  const getPet = (): string => {
    const animal = generateRandomItem([
      'owl',
      'cat',
      'toad',
      'rat',
      'dog',
      'dragon',
      'niffler',
    ])
    const name = generateRandomItem([
      'fuzzy butt',
      'Jake',
      'Buttons',
      'Bob',
      'Samantha',
      'Oliver',
    ])
    return `${animal} named ${name}`
  }

  const getPostDarkLordFeeling = () =>
    generateRandomItem([
      'feel your dark mark burn on a cold day',
      'want some fever fudge',
      'think Snape was evil',
    ])

  const getKids = (): string => {
    const house = generateRandomItem([
      'Slytherin',
      'Hufflepuff',
      'Gryfindor',
      'Ravenclaw',
    ])

    const kids = getNumber(5)

    let statement
    switch (kids) {
      case 0:
        statement = `You won't have any kids -- child free vacations for you!`
        break
      case 1:
        statement = `You will have 1 kid in ${house}`
        break
      default:
        statement = `You will have ${kids} kids, all of them will be in ${house}`
    }
    return statement
  }

  const emmaFortune = `You will graduate from Hogwarts without having to take any exams or go to any classes you didn't want to go to. You will work as an independently wealthy woman who does what she wants in London and live at Malfoy Manor. You will marry Draco Malfoy and have 3 kids, all three in Slytherin. You will have a big dog named Fenris. Even though the dark lord has fallen you still feel your dark mark burn on a cold day.`

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
        source={require('../assets/robe-header.jpg')}
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
