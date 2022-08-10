import React from 'react'
import { Text, Image } from 'native-base'

import { ButtonBase, HistoryPage } from '@components'
import { BloodyBaronProps } from '@navigation-types'

export const BloodyBaron = ({ navigation }: BloodyBaronProps) => {
  const nextButton = (
    <ButtonBase
      text={'Home'}
      onButtonPress={() => navigation.navigate('Home')}
    />
  )

  const image = (
    <Image
      source={require('../../assets/BloodyBaron.png')}
      alt={'Bloody Baron'}
      size={500}
    />
  )

  const descriptionText = (
    <Text fontSize={'md'}>
      The Bloody Baron (d. 11th century) was a wizard who attended Hogwarts
      School of Witchcraft and Wizardry in the Founders' time and was sorted
      into Slytherin House. After Hogwarts, he fell in love with Helena
      Ravenclaw, but she did not love him in return. He was sent by Rowena
      Ravenclaw to find Helena in Albania, but Helena refused to return with him
      and so he killed her in a rage. When he realised what he had done, the
      Baron stabbed himself with the same knife and died by suicide. After his
      death, he became one of the ghosts that haunts Hogwarts School of
      Witchcraft and Wizardry, and the ghost of Slytherin House. Covered in
      Helena Ravenclaw's blood to this day, he earned himself the moniker of
      "Bloody Baron".
    </Text>
  )

  return (
    <HistoryPage
      title={'Bloody Baron'}
      button={nextButton}
      image={image}
      descriptionText={descriptionText}
    />
  )
}
