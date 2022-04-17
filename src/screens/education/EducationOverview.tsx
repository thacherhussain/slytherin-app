import React from 'react'

import {HomeProps} from '../../utils/types'
import {Page, ButtonBase} from '../../components'
import {slytherinGreen} from '../../utils/semanticColors'

export const EducationOverview = ({navigation}: HomeProps) => {
  return (
    <Page>
      <ButtonBase
        text={'Next -- Not Built'}
        onButtonPress={() => navigation.navigate('Home')}
        backgroundColor={slytherinGreen}
      />
    </Page>
  )
}
