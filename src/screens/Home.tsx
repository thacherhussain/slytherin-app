import React from 'react'

import {HomeProps} from '../navigation/types'
import {Page, ButtonBase} from '../components'
import {slytherinGreen} from '../utils/semanticColors'

export const Home = ({navigation}: HomeProps) => {
  return (
    <Page>
      <ButtonBase
        text={'Characters'}
        onButtonPress={() => navigation.navigate('Characters')}
      />
      <ButtonBase
        text={'Education'}
        onButtonPress={() => navigation.navigate('EducationOverview')}
        backgroundColor={slytherinGreen}
      />
      <ButtonBase
        text={'School Store'}
        onButtonPress={() => navigation.navigate('SchoolStore')}
      />
      {/* <ButtonBase
        text={'Blank'}
        onButtonPress={() => navigation.navigate('Blank')}
        backgroundColor={slytherinGreen}
      /> */}
    </Page>
  )
}
