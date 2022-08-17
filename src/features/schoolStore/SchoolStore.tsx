import React from 'react'

import { HomeProps } from '@navigation-types'
import { Page, ButtonBase } from '@components'

export const SchoolStore = ({ navigation }: HomeProps) => {
  return (
    <Page>
      <ButtonBase
        text={'Home'}
        onButtonPress={() => navigation.navigate('Home')}
      />
    </Page>
  )
}
