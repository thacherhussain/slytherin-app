import React from 'react'
import {Text, Image} from 'native-base'

import {ButtonBase, HistoryPage} from '../../components'
import {SalazarProps} from '../../navigation/types'

export const Salazar = ({navigation}: SalazarProps) => {
  const nextButton = (
    <ButtonBase
      text={'Next'}
      onButtonPress={() => navigation.navigate('BloodyBaron')}
    />
  )

  const image = (
    <Image
      source={require('../../assets/SalazarSlytherin.png')}
      alt={'Salazar Slytherin'}
      size={500}
    />
  )

  const descriptionText = (
    <Text fontSize={'md'}>
      Salazar Slytherin was a pure-blood supremacist and believed half-bloods
      and, more specifically, Muggleborns to be unworthy of being taught magic.
      Slytherin's views at the time could have been attributed to the
      persecution of witches and wizards at the hand of Muggles during that
      century.
    </Text>
  )

  return (
    <HistoryPage
      title={'Salazar Slytherin'}
      button={nextButton}
      image={image}
      descriptionText={descriptionText}
    />
  )
}
