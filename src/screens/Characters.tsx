import React from 'react'

import {CharactersProps} from '../utils/types'
import {Page, ButtonBase} from '../components'

export const Characters = ({navigation}: CharactersProps) => {
  return (
    <Page>
      <ButtonBase
        text={'Home'}
        onButtonPress={() => navigation.navigate('Home')}
      />
      <ButtonBase
        text={'Single Character'}
        onButtonPress={() => navigation.navigate('SingleCharacter')}
      />
    </Page>
  )
}
