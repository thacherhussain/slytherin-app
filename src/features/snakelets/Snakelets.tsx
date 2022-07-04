import React from 'react'
import {Box, Text} from 'native-base'

import {SnakeletsProps} from '@navigation-types'
import {Page, ButtonBase} from '@components'

export const Snakelets = ({navigation}: SnakeletsProps) => {
  return (
    <Page>
      <Box alignItems={'center'} paddingBottom={5}>
        <Text fontSize={'lg'}>Snakelets Feature</Text>
      </Box>
      <ButtonBase
        text={'Home'}
        onButtonPress={() => navigation.navigate('Home')}
      />
    </Page>
  )
}
