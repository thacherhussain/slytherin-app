import React from 'react'
import {Box, Text, Image, useColorModeValue} from 'native-base'

import {HomeProps} from '@navigation-types'
import {Page, ButtonBase} from '@components'

export const Home = ({navigation}: HomeProps) => {
  return (
    <Page noScroll>
      <Image
        source={require('../assets/robe-header.jpg')}
        alt={'Slytherin Robes'}
        size={200}
        width={'100%'}
      />
      <Box alignItems={'center'} padding={5}>
        {/* <Text fontSize={'md'} color={useColorModeValue('black', 'white')}> */}
        <Text
          fontSize={'md'}
          _light={{color: 'tertiary.800'}}
          _dark={{color: 'amber.700'}}
        >
          Everything You Need to be a great Slytherin
        </Text>
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
        <ButtonBase
          text={'Snakelets'}
          onButtonPress={() => navigation.navigate('Snakelets')}
        />
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
