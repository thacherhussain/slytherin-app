import React from 'react'
import {NativeModules} from 'react-native'
import {Box, Text, Image} from 'native-base'

import {HomeProps} from '@navigation-types'
import {Page, ButtonBase} from '@components'

export const Home = ({navigation}: HomeProps) => {
  const env = NativeModules.RNConfig.env

  console.log('Using env: ', env)
  return (
    <Page themedBackground noScroll>
      <Box paddingTop={10}>
        <Image
          source={require('../assets/robe-header.jpg')}
          alt={'Slytherin Robes'}
          size={200}
          width={'100%'}
        />
      </Box>
      <Box alignItems={'center'} padding={5}>
        <Text fontSize={'md'}>Everything You Need to be a great Slytherin</Text>
      </Box>
      <Box>
        <ButtonBase
          text={'All Potterverse Characters'}
          onButtonPress={() => navigation.navigate('Characters')}
        />
        <ButtonBase
          text={'Slytherin History'}
          onButtonPress={() => navigation.navigate('SortingHat')}
        />
        {/* <ButtonBase
          text={'School Store'}
          onButtonPress={() => navigation.navigate('SchoolStore')}
        /> */}
        {/* <ButtonBase
          text={'Snakelets'}
          onButtonPress={() => navigation.navigate('Snakelets')}
        /> */}
        <ButtonBase
          text={'Divination'}
          onButtonPress={() => navigation.navigate('Divination')}
        />
        {/* <ButtonBase
          text={'Blank'}
          onButtonPress={() => navigation.navigate('Blank')}
        /> */}
      </Box>
    </Page>
  )
}
