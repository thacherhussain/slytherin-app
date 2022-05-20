import React from 'react'

import {HomeProps} from '../../navigation/types'
import {Page, ButtonBase} from '../../components'
import {Center, Text} from 'native-base'

export const History = ({navigation}: HomeProps) => {
  const nextButton = (
    <ButtonBase
      text={'Next'}
      onButtonPress={() => navigation.navigate('Home')}
    />
  )

  return (
    <Page button={nextButton}>
      <Center>
        <Text>Historical Things Here</Text>
      </Center>
    </Page>
  )
}
