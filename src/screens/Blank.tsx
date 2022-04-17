import React from 'react'
import {Box, Text} from 'native-base'

import {HomeProps} from '../navigation/types'
import {Page, ButtonBase} from '../components'
import {slytherinGreen} from '../utils/semanticColors'

export const Blank = ({navigation}: HomeProps) => {
  return (
    <Page>
      <Box alignItems={'center'} paddingBottom={5}>
        <Text fontSize={'lg'}>Main Text Here</Text>
      </Box>
      <ButtonBase
        text={'Home'}
        onButtonPress={() => navigation.navigate('Home')}
        backgroundColor={slytherinGreen}
      />
    </Page>
  )
}
