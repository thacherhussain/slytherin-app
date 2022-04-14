import React from 'react'

import {HomeProps} from '../utils/types'
import {Page, ButtonBase} from '../components'

export const Home = ({navigation}: HomeProps) => {
  return (
    <Page>
      <ButtonBase
        text={'Characters'}
        onButtonPress={() => navigation.navigate('Characters')}
      />
    </Page>
  )
}
