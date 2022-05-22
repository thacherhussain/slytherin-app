import React from 'react'
import {Box, Text, Image} from 'native-base'

import {HomeProps} from '../navigation/types'
import {Page, ButtonBase} from '../components'

export const Home = ({navigation}: HomeProps) => {
  return (
    <Page themedBackground noScroll>
      <Image
        source={require('../assets/robe-header.jpg')}
        alt={'Harry'}
        size={200}
        width={'100%'}
      />
      <Box alignItems={'center'} padding={5}>
        <Text fontSize={'md'}>Everything You Need to be a great Slytherin</Text>
      </Box>
      <Box>
        <ButtonBase
          text={'Slytherin History'}
          onButtonPress={() => navigation.navigate('SortingHat')}
        />
        <ButtonBase
          text={'School Store'}
          onButtonPress={() => navigation.navigate('SchoolStore')}
        />
        <ButtonBase
          text={'All Potterverse Characters'}
          onButtonPress={() => navigation.navigate('Characters')}
        />
        {/* <ButtonBase
        text={'Blank'}
        onButtonPress={() => navigation.navigate('Blank')}
      /> */}
      </Box>
    </Page>
  )
}
