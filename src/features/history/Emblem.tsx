import React from 'react'
import {Text, Image} from 'native-base'

import {ButtonBase, HistoryPage} from '@components'
import {EmblemProps} from '@navigation-types'

export const Emblem = ({navigation}: EmblemProps) => {
  const nextButton = (
    <ButtonBase
      text={'Next'}
      onButtonPress={() => navigation.navigate('Traits')}
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
      The emblematic animal of the house was a snake and the house's colours
      were green and silver. There were two notable heads of the house; Horace
      Slughorn took the role twice (first leaving in 1981 and then taking the
      role again from 1997 until leaving before 2016), and Severus Snape. The
      patron ghost of the house was the Bloody Baron. Slytherin corresponded
      roughly with the element of water due to serpents being commonly
      associated with the sea and lochs in western European mythology, as well
      as serpents being physically fluid and flexible animals. Similarly, in
      Celtic mythology, water is seen as a portal to another world, leading some
      to believe that the element was chosen to symbolise a Slytherin's dream
      for a world in which their goals and ambitions had finally been achieved.
      Others speculate that it was chosen to symbolise many Slytherins' hope for
      a pureblood-only wizarding society. The colours also corresponded with
      waters around lakes and lochs often being green, and silver being often
      associated with grey rainwater.
    </Text>
  )

  return (
    <HistoryPage
      title={'Emblem'}
      button={nextButton}
      image={image}
      descriptionText={descriptionText}
    />
  )
}
