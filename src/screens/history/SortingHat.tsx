import React from 'react'
import {Text, Image} from 'native-base'

import {ButtonBase, HistoryPage} from '@components'
import {SortingHatProps} from '@navigation-types'

export const SortingHat = ({navigation}: SortingHatProps) => {
  const nextButton = (
    <ButtonBase
      text={'Next'}
      onButtonPress={() => navigation.navigate('Emblem')}
    />
  )

  const image = (
    <Image
      source={require('../../assets/SortingHat.png')}
      alt={'Sorting Hat'}
      size={300}
      width={'100%'}
    />
  )

  const descriptionText = (
    <Text fontSize={'md'}>
      "Or perhaps in Slytherin, You'll make your real friends, Those cunning
      folk use any means, To achieve their ends." — Sorting Hat
    </Text>
  )

  return (
    <HistoryPage
      title={'Sorting Hat'}
      button={nextButton}
      image={image}
      descriptionText={descriptionText}
    />
  )
}
