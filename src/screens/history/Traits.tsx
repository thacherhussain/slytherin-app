import React from 'react'
import {Text, Image} from 'native-base'

import {ButtonBase, HistoryPage} from '@components'
import {TraitsProps} from '@navigation-types'

export const Traits = ({navigation}: TraitsProps) => {
  const nextButton = (
    <ButtonBase
      text={'Next'}
      onButtonPress={() => navigation.navigate('Salazar')}
    />
  )

  const image = (
    <Image
      source={require('../../assets/Emblem.png')}
      alt={'Emblem'}
      size={200}
    />
  )

  const descriptionText = (
    <Text fontSize={'md'}>
      Slytherins tended to be ambitious, shrewd, cunning, strong leaders, and
      achievement-oriented. They also had highly developed senses of
      self-preservation. This means that Slytherins tended to hesitate before
      acting, so as to weigh all possible outcomes before deciding exactly what
      should be done. According to Albus Dumbledore, the qualities which Salazar
      valued in the students he had chosen included cleverness, resourcefulness,
      determination, and "a certain disregard for the rules". Dumbledore noted
      that all of these were qualities possessed by Harry Potter, who was a
      Gryffindor but was almost placed in Slytherin. Slytherins tended to take
      charge and possessed strong leadership skills. They were often
      self-assured and confident of their own competence and can be very loyal.
    </Text>
  )

  return (
    <HistoryPage
      title={'Traits'}
      button={nextButton}
      image={image}
      descriptionText={descriptionText}
    />
  )
}
